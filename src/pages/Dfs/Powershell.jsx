import React from "react";
import PowershellSyn from "../../components/PowershellSyn";

const powershell = () => {
    return (
        <PowershellSyn>
            {`
            "Creer un pool de stockage (Storage Pool):"
            New-StoragePool -FriendlyName "pool1" -PhysicalDisks (Get-PhysicalDisk -CanPool $True) -StorageSubsystemFriendlyName "Windows Storage*"
            "ex..."
            "Selectionnez tous les disques physiques "=> Get-PhysicalDisk -CanPool $True
            "Specifiez les disques physiques des sorcières" => Get-PhysicalDisk -FriendlyName "disk1", "disk2", "disk3"
            
            "Creer un disque virtuel (Virtual disk):"
            New-VirtualDisk -StoragePoolFriendlyName "pool1" -FriendlyName "disk1" -Size (50GB) -ResiliencySettingName Mirror -ProvisioningType Thin
            "ex..."
            -ResiliencySettingName {
                "simple": les donnees sont reparties sur le disque physique, si un seul disque tombe en panne, les donnees sont perdues (disk1 = pool1) (RAID 0),
                "mirror": les donnees sont copiees entre les disques, ce n est pas grave si un disque physique tombe en panne, vous avez besoin d au moins deux disques pour selectionner cette option (disk1 < (pool1 / 2)) (RAID 1),
                "parity": utilise au moins trois disques physiques, si un disque tombe en panne, les donnees sont reconstruites et retabli (disk < (pool1 / 3)) (RAID 5)
            }
            
            -ProvisioningType {
                "thin": ne prendre que l espace necessaire,
                "fixed": prendre tout l espace specifie
            }

            "Creer une nouvelle partition (Partition):"
            Get-VirtualDisk -FriendlyName "disk1" | Get-Disk | New-Partition -AssignDriveLetter -size (25GB) | Format-Volume

            "Afficher le/les pool de stockage:"
            Get-StoragePool
            Get-StoragePool -FriendlyName "pool1"

            "Afficher le/les disque virtuel:"
            Get-VirtualDisk
            Get-VirtualDisk -FriendlyName "disk1"
            
            "Afficher une/toutes partition:"
            Get-Partition
            Get-Partition -DriveLetter "C"

            "Remove virtual disk:"
            Remove-StoragePool -FriendlyName "pool1"

            "Remove virtual disk:"
            Remove-VirtualDisk -FriendlyName "disk1"

            "Remove partition:"
            Remove-Partition -DriveLetter "D"
            `}
        </PowershellSyn>
    );
};

export default powershell;
