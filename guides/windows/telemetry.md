# Disable Windows Telemetry on 10/11

## Requirements

- Windows 10 or 11 Enterprise edition.

If you're running Home or Pro, you can upgrade to Enterprise using [MAS](https://massgrave.dev/).

## Disable Telemetry

1. Open the Local Group Policy Editor:
   - Search for "Edit Group Policy" in the Start menu or run `gpedit.msc`.
2. Navigate to:
   - `Computer Configuration` > `Administrative Templates` > `Windows Components` > `Data Collection and Preview Builds`
3. Double-click `Allow Telemetry` (Windows 10) or `Allow Diagnostic Data` (Windows 11) in the right pane.
4. Enable the policy and set the option to:
   - `Security [Enterprise Only]` (Windows 10) or `Diagnostic data off` (Windows 11)
5. Click `OK` to save the changes.

## Verify the Changes

1. Open the Registry Editor (`regedit.exe`).
2. Navigate to: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\DataCollection`
3. Check that the `AllowTelemetry` value is set to `0`. This indicates that telemetry is disabled.
