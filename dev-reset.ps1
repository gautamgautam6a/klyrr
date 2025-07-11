# PowerShell version of dev-reset.ps1 (Netlify Dev only)

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
Remove-Item netlify.log, netlify.err -ErrorAction SilentlyContinue

# Start Netlify dev and log output using cmd.exe
Start-Process -FilePath "cmd.exe" -ArgumentList '/c netlify dev > netlify.log 2> netlify.err' -WindowStyle Hidden

Write-Host "\nNetlify Dev is running."
Write-Host "\nCheck http://localhost:8888 in your browser."
Write-Host "If the page is blank, open the browser console (F12) and look for errors."
Write-Host "\nTo view logs, run:"
Write-Host "  Get-Content netlify.log -Wait"
Write-Host "  Get-Content netlify.err -Wait"
Write-Host "\nTo stop the server, close its window or use Task Manager to end the process." 