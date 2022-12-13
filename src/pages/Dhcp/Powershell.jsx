import React from "react";
import PowershellSyn from "../../components/PowershellSyn";

const Powershell = () => {
    return (
        <PowershellSyn>
            {`
            "Installation DHCP:"
            Install-WindowsFeature dhcp -IncludeManagementTools

            "T2aked beli DHCP installer:"
            Get-WindowsFeature dhcp

            "Mn wra installation khass redemarrer:" 
            Restart-Computer

            "Ajouter un nouveau scope:"
            Add-DhcpServerv4Scope -Name "scope1" -StartRange 192.168.0.100 -EndRange 192.168.0.200 -SubnetMask 255.255.255.0
            Mni kadir chi Scope jdid kate3tah Id ex...
            ...-StartRange 172.128.6.100 -EndRange 172.128.6.200 -SubnetMask 255.255.255.0...
            ScopeID => 172.128.6.0
            
            "Ajouter la duree du bail (lease duration):"
            Set-DhcpServerv4Scope -ScopeId 192.168.0.0 -LeaseDuration 4.12:00:00
            LeaseDuration => jour.heures:minutes:second
            
            "Activer (active) / Desactiver (inActive) Scope:"
            Set-DhcpServerv4Scope -ScopeId 192.168.0.0 -State inActive
            
            "Afficher tout les Scopes:"
            Get-DhcpServerv4Scope
            
            "Ajouter une plage d exclusion (exclusion range):"
            Add-DhcpServerv4ExclusionRange -ScopeId 192.168.0.0 -StartRange 192.168.0.1010 -EndRange 192.168.0.125
            
            "Afficher toutes les plages d exclusion (Exclusion Ranges):"
            Get-DhcpServerv4ExclusionRange
            
            "Ajouter des options a un Scope:"
            Ga3 les option dyal scope t9der tzid ola modifihom, hado des exemples:
            Set-DhcpServerv4OptionValue -ScopeId 192.168.0.0 -Router 192.168.0.254 -DnsServer 192.168.0.253 -DnsDomain "ofppt.local" -WinsServer 192.168.0.252
            
            "Afficher toutes les options disponibles pour un scope:"
            Get-DhcpServerv4OptionDefinition
            
            "Ajouter une reservation:"
            Add-DhcpServerv4Reservation -ScopeId 192.168.0.0 -IpAddress 192.168.0.101 -ClientId "99:74:FE:A1:BB:69"
            
            "Redemarrer le service DHCP:"
            Restart-Service dhcpserver
            
            "Autoriser un serveur DHCP dans active directory:"
            Add-DhcpServerInDC -IpAddress 192.168.0.253 -DnsName "PC1.ofppt.local"      
          
            Restart-Computer = restart-computer = RESTART-COMPUTER`}
        </PowershellSyn>
    );
};

export default Powershell;
