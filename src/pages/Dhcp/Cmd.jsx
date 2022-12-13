import React from "react";
import CmdSyn from "../../components/CmdSyn";

const Cmd = () => {
    return (
        <CmdSyn>
            {`
            "Configurez le serveur DHCP en utilisant la ligne de commande:"

            sc config dhcpserver start=auto
            net start dhcpserver

            "Autorisez le serveur dans AD:"
            netsh dhcp add server Server1.ofppt.local 192.168.0.1

            "Créez un scope vide:"
            netsh dhcp server add scope 192.168.0.0 255.255.255.0 "Scope1"
            
            "Ajoutez une plage d'adresses IP:"
            netsh dhcp server scope 192.168.0.0 add iprange 192.168.0.10 192.168.0.100

            "Définissez l'option de passerelle par défaut:"
            netsh dhcp server scope 192.168.0.0 set optionvalue 003 IPADDRESS 192.168.0.1

            "Définissez la durée du bail en secondes:"
            netsh dhcp server scope 192.168.0.0 set optionvalue 51 DWORD 28800

            "Définissez le serveur DNS:"
            netsh dhcp server scope 192.168.0.0 set optionvalue 006 IPADDRESS 192.168.0.1

            "Ajoutez une réservation DHCP:"
            netsh dhcp server scope 192.168.0.0 add reservedip 192.168.0.5 A1B2C3D4E5F6 "Printer1" "Reservation for Printer1"

            "Affiche tous les serveurs DHCP dans le service d'annuaire pour le domaine actuel:"
            netsh dhcp show server
            `}
        </CmdSyn>
    );
};

export default Cmd;
