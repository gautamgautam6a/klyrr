# PowerShell version of dev-reset.sh

# Kill all node processes (ignore errors if none running)
Get-Process node -ErrorAction SilentlyContinue | ForEach-Object { $_.Kill() }

# Wait a moment to ensure ports are freed
Start-Sleep -Seconds 2

# Check if ports 3000 or 8888 are still in use
$portsInUse = @(3000, 8888) | Where-Object {
    (Get-NetTCPConnection -State Listen -LocalPort $_ -ErrorAction SilentlyContinue)
}
if ($portsInUse.Count -gt 0) {
    Write-Host "Error: Port 3000 or 8888 is still in use. Please free the port(s) and try again."
    exit 1
}

# Remove old logs
Remove-Item vite.log, netlify.log -ErrorAction SilentlyContinue

# Start Vite in the background and log output
Start-Process -FilePath "npx" -ArgumentList "vite" -RedirectStandardOutput "vite.log" -RedirectStandardError "vite.log" -NoNewWindow

# Wait for Vite to be ready
Write-Host "Waiting for Vite to be ready..."
do {
    Start-Sleep -Seconds 1
    $viteReady = Select-String -Path vite.log -Pattern "ready in" -Quiet
    Write-Host -NoNewline "."
} until ($viteReady)
Write-Host "`nVite is ready!"

# Start Netlify dev and log output
Start-Process -FilePath "netlify" -ArgumentList "dev" -RedirectStandardOutput "netlify.log" -RedirectStandardError "netlify.log" -NoNewWindow

Write-Host "\nBoth servers are running."
Write-Host "\nCheck http://localhost:8888 in your browser."
Write-Host "If the page is blank, open the browser console (F12) and look for errors."
Write-Host "\nTo view logs, run:"
Write-Host "  Get-Content vite.log -Wait"
Write-Host "  Get-Content netlify.log -Wait"
Write-Host "\nTo stop the servers, close their windows or use Task Manager to end the processes." 