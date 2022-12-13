import React from "react";
import CmdSyn from "../../components/CmdSyn";

const Cmd = () => {
    return (
        <CmdSyn>
            {`
            "Creer une nouvelle unite organisationnelle (OU):"
            DSAdd ou "OU=ou1,DC=ofppt,DC=local" 

            "Obtenir l unite organisationnelle:"
            DSGet ou "OU=ou1,DC=ofppt,DC=local"
            
            "Modifier les proprietes du OU:"
            DSMod ou "OU=ou1,DC=ofppt,DC=local" -s 192.168.0.254 -d ofppt.local
            
            "Afficher les proprietes du OU:"
            DSGet ou "OU=ou1,DC=ofppt,DC=local" -s -d -u -p -desc

            "Supprimer une unite d organisation:"
            DSRm "OU=ou1,DC=ofppt,DC=local" -subtree 

            "Lister tous les OU:"
            DSQuery ou "OU=ou1,DC=ofppt,DC=local"
            
            -s: server,
            -d: domain,
            -u: userName,
            -p: password
            -desc: description,


            "Creer un groupe:"
            DSAdd group "CN=group1,DC=ofppt,DC=local"
            
            "Afficher un groupe:"
            DSGet group "CN=group1,DC=ofppt,DC=local"
            
            "Modifier les proprietes du groupe:"
            DSMod group "CN=group1,DC=ofppt,DC=local" -s g -desc "..."
            
            "Afficher les proprietes du groupe:"
            DSGet group "CN=group1,DC=ofppt,DC=local" -s -desc

            "Supprimer un groupe:"
            DSRm "CN=group1,DC=ofppt,DC=local"

            "Lister tous les groupes:"
            DSQuery group "CN=group1,DC=ofppt,DC=local"
            
            -scope { l: local, u: universal, g: global },


            "Creer un utilisateur:"
            DSAdd user "CN=Ahmed,DC=ofppt,DC=local" -fn "Ahmed" -pwd P@ssw0rd -mustchpwd yes

            "Afficher un utilisateur:"
            DSGet user "CN=Ahmed,DC=ofppt,DC=local"

            "Modifier les proprietes d utilisateur:"
            DSMod user "CN=Ahmed,DC=ofppt,DC=local" -fn "Aya" -desc "..." -office "..."

            "Afficher les proprietes d utilisateur:"
            DSGet user "CN=Ahmed,DC=ofppt,DC=local" -fn -desc -office

            "Supprimer un utilisateur:"
            DSRm "CN=Ahmed,DC=ofppt,DC=local"

            "Lister tous les utilisateurs:"
            DSQuery user "CN=Ahmed,DC=ofppt,DC=local"
            
            -fn: firstName, 
            -ln: lastName,
            -pwd: password,
            -display: displayName,
            -mustchpwd: doit changer de mot de passe a la connexion { yes, no },


            "Creer une machine:"
            DSAdd computer "CN=PC1,DC=ofppt,DC=local"

            "Afficher une machine:"
            DSGet computer "CN=PC1,DC=ofppt,DC=local"

            "Modifier les proprietes du machine:"
            DSMod computer "CN=PC1,DC=ofppt,DC=local" -disabled no -desc "..."
            
            "Afficher les proprietes du machine:"
            DSGet computer "CN=PC1,DC=ofppt,DC=local" -disabled -desc 

            "Supprimer une machine:"
            DSRm "CN=PC1,DC=ofppt,DC=local"

            "Lister toutes les machine:"
            DSQuery computer "CN=PC1,DC=ofppt,DC=local"

            -loc: location,
            -disabled: { yes/no },
            `}
        </CmdSyn>
    );
};

export default Cmd;
