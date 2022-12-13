import React from "react";
import PowershellSyn from "../../components/PowershellSyn";

const powershell = () => {
    return (
        <PowershellSyn>
            {`
            "Creer une nouvelle unite organisationnelle (OU):"
            New-ADOrganizationalUnit -Name "ou1" -Description "..." -Path "DC=ofppt,DC=local"

            "Obtenir l unite organisationnelle:"
            Get-ADOrganizationalUnit -Identity "OU=ou1,DC=ofppt,DC=local"
            Get-ADOrganizationalUnit -Filter *

            "Desactiver la protection contre la suppression accidentelle d unite organisationnelle (OU):"
            Set-ADOrganizationalUnit -Identity "OU=ou1,DC=ofppt,DC=local" -ProtectedFromAccidentalDeletion $false

            "Supprimer une unite d organisation (OU):"
            Remove-ADOrganizationalUnit -Identity "OU=ou1,DC=ofppt,DC=local"

            "Supprimer n importe quel objet AD (Users, Groups, OU):"
            Remove-ADObject -Identity "OU=ou1,DC=ofppt,DC=local"
            Remove-ADObject -Identity "CN=group1,DC=ofppt,DC=local"

            "Creer un groupe:"
            New-ADGroup -Name "group1" -GroupCategory distribution -GroupScope universal
            New-ADGroup -Name "group2" -GroupCategory Security -GroupScope Global -Path "DC=ofppt,DC=local" -DisplayName "..." -Description "..."

            "Afficher un groupe:"
            Get-ADGroup "group1"

            "Modifier les proprietes du groupe:"
            Set-ADGroup "group1" -Server "192.168.0.254" -ManagedBy "..." 

            "Supprimer un groupe:"
            Remove-ADGroup "group1"

            "Ajouter des membres a un groupe:"
            Add-ADGroupMember "group1" -Members "Ahmed", "Aya"

            "Obtenir les membres d un groupe:"
            Get-ADGroupMember "group1"

            "Supprimer des membres d un groupe:"
            Remove-ADGroupMember "group1" -Members "Ahmed", "Aya"

            "Obtenir tous les groupes de securite auxquels Ahmed appartient:"
            Get-ADAccountAuthorizationGroup "Ahmed"

            "Creer un utilisateur:"
            New-ADUser -Name "Ahmed"
            "Parametres Optionnelle:"
            New-ADUser -Name "Aya" -Path "DC=ofppt,DC=local" -AccountPassword "P@assw0rd" -ChangePasswordAtLogon $true -Enabled $true -DisplayName "..." -GivenName "..." -City "..." -Description "..."

            "Obtenir un utilisateur Active Directory:"
            Get-ADUser "Ahmed"

            "Activer / desactiver un compte AD:"
            Enable-ADAccount "Ahmed"
            Disable-ADAccount "Ahmed"

            "Supprimer un utilisateur:"
            Remove-ADUser -Identity "Ahmed"

            "Obtenir les proprietes de l utilisateur:"
            Get-ADUser "Ahmed" -Property "name", "address", "country"

            "Modifier le mot de passe de l utilisateur:"
            Set-ADAccountPassword -Identity "Ahmed" -NewPassword(ConvertTo-SecureString -AsPlainText "P@ssw0rd" -Force) -reset

            "Ajouter un utilisateur dans un groupe ou plusieurs groupes:"
            Add-ADPrincipalGroupMemberShip -Identity "Ahmed" -MemberOf "group1", "group2"

            "Supprimer un utilisateur d un groupe ou de plusieurs groupes:"
            Remove-ADPrincipalGroupMemberShip -Identity "Ahmed" -MemberOf "group1", "group2"

            "Creer une machine:"
            New-ADComputer -Name "PC1" -Path "DC=ofppt,DC=local"

            "Modifier les proprietes d une machine:"
            Set-ADComputer -Identity "PC1" -DisplayName "..." -Description "..." -Enabled $true

            "Obtenir les proprietes d une machine:"
            Get-ADComputer -Identity "PC1" -Properties *

            "Supprimer une machine:"
            Remove-ADComputer "PC1"
            `}
        </PowershellSyn>
    );
};

export default powershell;
