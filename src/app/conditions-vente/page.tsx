'use client';

import { motion } from 'framer-motion';

export default function LegalNotice() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Conditions de vente
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Conditions de vente
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert"
          >
            <h2>1. Champ d'application et acceptation</h2>
            <p>
              Les présentes conditions générales (ci-après « CG ») définissent les modalités d'accès et d'usage des services proposés par Frozenhost.
              Toute commande ou souscription vaut acceptation sans réserve des CG en vigueur au jour de la validation.
              Les CG sont disponibles en ligne et opposables tant qu'elles sont publiées.
              Aucune tolérance ou inaction de Frozenhost ne saurait valoir renonciation à ses droits.
            </p>

            <h2>2. Description des services</h2>
            <p>
              Frozenhost propose des VPS et divers services informatiques à destination de particuliers, professionnels et institutions, en France comme à l'étranger.
              L'accès à ces prestations est conditionné au paiement du tarif associé et à l'acceptation expresse des présentes CG.
            </p>

            <h2>3. Modalités de commande et de mise en service</h2>
            <p>
              Toute commande est traitée dans un délai maximum de 7 jours suivant confirmation du paiement, sauf rupture de stock ou surcharge exceptionnelle.
              En cas d'indisponibilité, le client sera informé rapidement et pourra opter pour un remboursement ou un produit équivalent.
              La livraison se fait directement sur l'espace client utilisé lors de la commande.
            </p>

            <h2>4. Activation, facturation et livraison</h2>
            <p>
              L'activation du service déclenche le début de la facturation.
              Le client reçoit une notification par email une fois le service disponible.
              Le client dispose de 24h pour signaler toute anomalie.
              Passé un délai de 7 jours sans livraison, le remboursement intégral pourra être exigé.
            </p>

            <h2>5. Durée et renouvellement</h2>
            <p>
              Le contrat est conclu pour la durée choisie lors de la souscription.
              Il est reconduit automatiquement à chaque règlement effectué.
              Un défaut de paiement entraîne la résiliation immédiate sans formalité préalable.
              Le renouvellement doit être validé par le client via l'espace d'administration.
            </p>

            <h2>6. Responsabilité du client sur les contenus</h2>
            <p>
              Le client reste l'unique responsable des données et contenus diffusés par le biais des services.
              Il s'engage à disposer des droits nécessaires et à respecter les lois en vigueur.
              Frozenhost ne peut être tenu responsable des contenus publiés par ses clients ni de leurs conséquences.
            </p>

            <h2>7. Sécurité, abus et restrictions</h2>
            <p>
              Toute activité portant atteinte à la sécurité de l'infrastructure (hacking, abus de bande passante, spam, faille logicielle exploitée…)
              entraîne une suspension immédiate, avec ou sans avertissement.
              En cas de récidive ou d'inaction, le service peut être désactivé définitivement.
              Les frais liés à la remise en état ou aux dommages sont à la charge du client.
            </p>

            <h2>8. Obligation du client – usage légal</h2>
            <p>
              Le client s'engage à utiliser les services conformément à la législation, notamment en matière de protection des mineurs, respect de la vie privée,
              des droits d'auteur et de la dignité humaine.
              Sont interdits : diffusion de contenus illégaux, appels à des actes délictueux, ou toute forme de harcèlement ou discrimination.
            </p>

            <h2>9. Suspension temporaire pour maintenance</h2>
            <p>
              Des interruptions planifiées peuvent survenir pour des opérations de maintenance ou mises à jour.
              Dans la mesure du possible, les clients seront informés en amont via le site.
              Aucune compensation ne sera due pour ces suspensions.
            </p>

            <h2>10. Données personnelles et obligations déclaratives</h2>
            <p>
              Le client certifie être majeur et fournir des informations exactes lors de son inscription.
              Il s'engage à mettre à jour ses coordonnées en cas de modification.
              En application de la législation en vigueur, les données peuvent être transmises aux autorités judiciaires sur réquisition.
            </p>

            <h2>11. Protection des accès et confidentialité</h2>
            <p>
              Les identifiants fournis au client doivent être conservés de manière confidentielle.
              Toute utilisation frauduleuse résultant d'une négligence sur ces accès reste sous la responsabilité exclusive du client.
            </p>

            <h2>12. Responsabilité – limites et exclusions</h2>
            <p>
              Frozenhost ne garantit pas l'accès ininterrompu aux services en raison des dépendances au réseau mondial Internet.
              La société est soumise à une obligation de moyens, et non de résultat.
              La responsabilité de Frozenhost ne pourra être engagée que dans la limite d'un remboursement plafonné au montant mensuel du service impacté,
              sous forme d'avoir ou de remboursement.
            </p>

            <h2>13. Révisions tarifaires</h2>
            <p>
              Les prix affichés sont en euros TTC.
              Frozenhost se réserve la possibilité d'ajuster ses tarifs à tout moment.
              Le client sera informé de tout changement au moins six semaines à l'avance.
              Sans opposition notifiée par courrier recommandé dans ce délai, la modification est réputée acceptée.
            </p>

            <h2>14. Paiement</h2>
            <p>
              Les prestations sont facturées selon les tarifs indiqués au moment de la commande.
              Le paiement est exigé à la date d'échéance mensuelle.
              En cas de non-paiement, les services sont suspendus ou résiliés de plein droit.
            </p>

            <h2>15. Droit de rétractation</h2>
            <p>
              Le droit de rétractation ne s'applique pas une fois le service activé.
              Si aucun déploiement n'a été effectué, le client dispose d'un délai de 14 jours pour se rétracter via le support.
              Les remboursements sont réalisés sous 30 jours, après déduction de 10 % de frais de dossier.
            </p>

            <h2>16. Résiliation pour non-respect</h2>
            <p>
              Frozenhost se réserve le droit de résilier tout service en cas de violation grave ou répétée des présentes conditions,
              ou en cas d'activité illégale signalée.
            </p>

            <h2>17. Cas de force majeure</h2>
            <p>
              En cas d'événement imprévisible échappant au contrôle de Frozenhost (panne réseau externe, catastrophe naturelle, interruption télécom…),
              la responsabilité de l'hébergeur ne pourra être engagée.
            </p>

            <h2>18. Litiges et compétence juridique</h2>
            <p>
              En cas de litige, et après tentative de résolution amiable, la compétence est attribuée aux tribunaux français compétents.
              Le droit français est seul applicable au présent contrat.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}