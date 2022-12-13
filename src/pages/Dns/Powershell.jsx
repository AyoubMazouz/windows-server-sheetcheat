import React from "react";
import PowershellSyn from "../../components/PowershellSyn";

const powershell = () => {
    return (
        <PowershellSyn>
            {`
            "Installation DNS:"
            Install-WindowsFeature dns -IncludeManagementTools

            "T2aked beli DNS installer:"
            Get-WindowsFeature dns

            "Ajouter une nouvelle zone primaire (Forward Lookup Zone):"
            Add-DnsServerPrimaryZone -Name "ofppt.local" -ZoneFile "ofppt.local.dns"

            "Ajouter une nouvelle zone primaire reversee (reverse Lookup Zone):"
            Add-DnsServerPrimaryZone -NetworkId 192.168.0.0/24 -ZoneFile "0.168.192.in-addr.arpa.dns"
            ZoneFile ex... 172.128.16.0 => 16.128.172

            "Ajoute un enregistrement de ressource de type "A" a une zone DNS (A host):"
            Add-DnsServerPrimaryZone -NetworkId 192.168.0.0/24 -ZoneFile "0.168.192.in-addr.arpa.dns" 
            ex... 192.168.0.249 => pc3.ofppt.local

            "Ajoute un enregistrement de ressource de type "AAA" a une zone DNS (AAA host | IpV6):"
            Add-DnsServerResourceRecordAAAA -Name "PC3" -ZoneName "ofppt.local" -IPv6Address "2001:db8::00EE:FFFF"
            ex..."2001:db8::00EE:FFFF" =>  pc3.ofppt.local
            
            "Ajoute un enregistrement de ressource de type "CName" a une zone DNS (A host):"
            Add-DnsServerResourceRecordCName -Name "PC3" -ZoneName "ofppt.local" -HostNameAlias "john.ofppt.local"
            PC3.ofppt.local => john.ofppt.local
            
            "Ajoute un enregistrement de ressource de type "CName" a une zone DNS (A host):"
            Add-DnsServerResourceRecordCName -Name "PC3" -ZoneName "ofppt.local" -HostNameAlias "john.ofppt.local"
            PC3.ofppt.local => john.ofppt.local

            "Ajouter une zone secondaire (Secondary Zone):"
            "SERVER 1:"
            Set-DnsServerPrimaryZone -Name "ofppt.local" -SecureSecondaries TransferAnyServer -Notify Notify
            "SERVER 2:"
            Add-DnsServerSecondaryZone -Name "ofppt.local" -ZoneFile "ofppt.local.dns" -MasterServers 192.168.0.254
            `}
        </PowershellSyn>
    );
};

export default powershell;
