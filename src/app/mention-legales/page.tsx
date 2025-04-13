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

          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Mentions Légales
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl px-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="prose dark:prose-invert space-y-6"
  >
    <p>
      Ce site est édité par <strong>aCollective</strong>, dont le siège social est situé au <strong>120 rue Joncours - 44100 Nantes</strong>.
    </p>

    <p>
      Responsable de la publication : <strong>Pierre LE CUNFF</strong> - <a href="mailto:contact@frozenhost.fr">contact@frozenhost.fr</a>
    </p>

    <p>
      SIRET : <strong>912 231 040 000 11</strong><br/>
    </p>

    <p>
      Pour toute question ou demande d&apos;information, vous pouvez nous contacter à l&apos;adresse suivante : <a href="mailto:contact@frozenhost.fr">contact@frozenhost.fr</a>
    </p>

    <p>
      L&apos;utilisation du site <a href="https://www.frozenhost.fr">frozenhost.fr</a> implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation décrites ci-dessous. Ces conditions peuvent être modifiées à tout moment, nous vous invitons donc à les consulter régulièrement.
    </p>

    <p>
      Ce site est accessible en permanence aux utilisateurs, sauf interruption pour maintenance technique décidée par Frozenhost, qui informera préalablement les utilisateurs.
    </p>

    <p>
      Le site est régulièrement mis à jour. Frozenhost ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour des informations diffusées, qu&apos;elles soient de son fait ou du fait des tiers partenaires.
    </p>

    <p>
      Le site utilise la technologie JavaScript. L&apos;utilisateur s&apos;engage à accéder au site avec un matériel récent, sans virus, et un navigateur mis à jour.
    </p>

    <p>
      Frozenhost détient les droits de propriété intellectuelle ou les droits d&apos;usage sur tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels). Toute reproduction ou utilisation non autorisée est strictement interdite et passible de poursuites judiciaires conformément aux articles L.335-2 et suivants du Code de Propriété Intellectuelle.
    </p>

    <p>
      Frozenhost ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, ni des dommages indirects (tels qu&apos;une perte de marché ou d&apos;une chance) résultant de son utilisation. Les sauvegardes effectuées par Frozenhost ne garantissent pas la restauration complète des données.
    </p>

    <p>
      Des espaces interactifs sont à la disposition des utilisateurs. Frozenhost se réserve le droit de supprimer sans préavis tout contenu contraire à la législation française. La responsabilité civile et/ou pénale de l&apos;utilisateur pourra être engagée en cas de contenu injurieux, raciste, diffamant ou pornographique.
    </p>

    <p>
      Aucune information personnelle de l&apos;utilisateur du site n&apos;est collectée à son insu, échangée, transférée ou vendue à des tiers, sauf en cas de rachat de Frozenhost où l&apos;acquéreur sera tenu aux mêmes obligations de protection des données.
    </p>

    <p>
      Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition aux données vous concernant, en adressant votre demande écrite accompagnée d&apos;une copie d&apos;un titre d&apos;identité signé à l&apos;adresse suivante : <a href="mailto:contact@frozenhost.fr">contact@frozenhost.fr</a>.
    </p>

    <p>
      Le site utilise des cookies pour faciliter la navigation et mesurer sa fréquentation. Vous pouvez refuser leur installation en configurant votre navigateur (Internet Explorer, Firefox, Safari, Chrome) selon les procédures décrites dans l&apos;aide de celui-ci.
    </p>

    <p>
      Tout litige relatif à l&apos;utilisation du site est soumis au droit français, avec attribution exclusive de juridiction aux tribunaux compétents de Paris.
    </p>

    <p>
      Lois concernées : loi n° 78-87 du 6 janvier 1978 modifiée par la loi n° 2004-801 du 6 août 2004, loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.
    </p>

    <p>
      <strong>Utilisateur :</strong> internaute utilisant le site mentionné.
    </p>

    <p>
      <strong>Informations personnelles :</strong> informations permettant directement ou indirectement l&apos;identification des personnes physiques concernées (article 4 loi n° 78-17 du 6 janvier 1978).
    </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}