$a = Get-Command psql -erroraction 'silentlycontinue'

$env:PGPASSWORD = "jarp"

Invoke-Expression "psql -U postgres -c 'CREATE DATABASE settleup;'"


if ($a){ 
    echo "[✅] psql installed"
} else {
    echo "[❌] psql not detected; make sure you have it installed and added to path"
}

Invoke-Expression "npm i --no-fund --no-audit"
Invoke-Expression "npm i --workspaces --no-fund --no-audit"

