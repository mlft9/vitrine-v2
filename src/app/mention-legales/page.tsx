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
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Mentions Légales
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Informations Légales
          </p>
        </motion.div>

        <div className="mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert"
          >
            <p>
              Ce site est édité par [Nom de l&apos;entreprise ou de l&apos;individu], dont le siège social est situé à [Adresse].
            </p>
            <p>
              Directeur de la publication : [Nom du directeur]
            </p>
            <p>
              Hébergeur : [Nom de lvhébergeur], [Adresse de l'hébergeur]
            </p>
            <p>
              Pour toute question ou demande d&apos;information, vous pouvez nous contacter à l'adresse suivante : [Adresse e-mail de contact]
            </p>
            <p>
              Ce site respecte la vie privée de l&apos;internaute et se conforme strictement aux lois en vigueur sur la protection de la vie privée et des libertés individuelles. Aucune information personnelle n&apos;est collectée à votre insu. Aucune information personnelle n&apos;est cédée à des tiers.
            </p>
            <p>
              Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d&apos;un droit d&apos;accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à [Adresse e-mail de contact].
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
