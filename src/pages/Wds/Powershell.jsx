import React from "react";
import PowershellSyn from "../../components/PowershellSyn";

const powershell = () => {
    return (
        <PowershellSyn>
            {`
            "Installer la fonctionnalité Windows Deployment WDS:"
            Install-WindowsFeature wds-deployment -includeManagementTools

            "Utilisez l'utilitaire de ligne de commande WDS pour initialiser le serveur. Spécifiez où vous souhaitez que votre installation à distance soit. Je place la sortie de la commande dans une variable car elle peut générer des avertissements inutiles:"
            $wdsUtilResults = wdsUtil /initialize-server /remInst:"E:\remInstall"
            $wdsUtilResults | select -last 1

            "Ensuite, nous devons ajouter une image de démarrage et au moins une image d'installation avant de pouvoir vraiment faire quoi que ce soit avec, alors importons le boot.wim. Je vais spécifier le chemin vers l'ISO de Windows 10 monté sur notre serveur WDS. Ensuite, nous allons importer l'image d'installation:"
            Import-WdsBootImage -Path "D:\sources\boot.wim"

            "Nous devrions créer un groupe d'images pour le stocker. J'appellerai mon groupe 'isoImages':"
            New-WdsInstallImageGroup -Name "isoImages"

            "Un WIM sur un support d'installation peut contenir plusieurs images. Nous pouvons utiliser la commande Get-WindowsImage pour lister les images:"
            -imagePath "D:\sources\install.wim" | select ImageName

            "Utilisez ensuite le nom de l'image que nous voulons importer:"
            $imageName = 'Windows 10 Pro'
            Import-WdsInstallImage -ImageGroup "isoImages" -Path "D:\sources\install.wim" -ImageName $imageName
            `}
        </PowershellSyn>
    );
};

export default powershell;
