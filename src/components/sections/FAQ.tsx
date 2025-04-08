'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    category: 'Pour commencer',
    questions: [
      {
        question: 'Comment commander un serveur de jeu ?',
        answer: 'Pour commander un serveur, choisissez le jeu souhaité sur notre site, sélectionnez le plan qui vous convient, et suivez les instructions pour créer un compte. Une fois le paiement effectué, votre serveur sera prêt en quelques minutes.',
      },
      {
        question: 'Quels moyens de paiement acceptez-vous ?',
        answer: 'Nous acceptons toutes les principales cartes de crédit, PayPal. Tous les paiements sont traités de manière sécurisée via nos partenaires de paiement.',
      },
      {
        question: 'Puis-je améliorer mon serveur plus tard ?',
        answer: 'Oui ! Vous pouvez augmenter les ressources de votre serveur (RAM, CPU, stockage) à tout moment via votre panneau de contrôle. Les modifications prennent effet immédiatement.',
      },
    ],
  },
  {
    category: 'Technique',
    questions: [
      {
        question: 'Quel panneau de contrôle utilisez-vous ?',
        answer: 'Nous utilisons le panneau Pterodactyl, un panneau moderne de gestion de serveurs de jeu. Il offre un accès complet aux fichiers, une console, des sauvegardes, et plus encore.',
      },
      {
        question: 'Proposez-vous une protection contre les DDoS ?',
        answer: 'Oui, tous nos serveurs incluent une protection DDoS de niveau entreprise sans coût supplémentaire. Notre protection peut atténuer des attaques allant jusqu’à 1 Tbps.',
      },
      {
        question: 'Puis-je installer des mods personnalisés ?',
        answer: 'Absolument ! Vous avez un accès FTP complet à votre serveur et pouvez installer tous les mods compatibles avec votre jeu. Notre panneau facilite la gestion des mods.',
      },
    ],
  },
  {
    category: 'Tarifs et support',
    questions: [
      {
        question: 'Quelle est votre politique de remboursement ?',
        answer: 'Nous offrons une garantie de remboursement de 24 heures. Si vous n’êtes pas satisfait de notre service, contactez le support dans les 24 heures pour un remboursement complet.',
      },
      {
        question: 'Comment puis-je contacter le support ?',
        answer: 'Le support est disponible 24/7 via notre système de tickets sur notre Discord.',
      },
      {
        question: 'Proposez-vous une facturation mensuelle ?',
        answer: 'Oui, tous nos plans peuvent être facturés mensuellement.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Questions Fréquemment Posées
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                  >
                    <Disclosure>
                      {({ open }) => (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700/5 overflow-hidden">
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-800/50 px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
                            <span className="text-base font-medium text-gray-900 dark:text-white">
                              {faq.question}
                            </span>
                            <ChevronDownIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-blue-400 dark:text-blue-300 transition-transform duration-200`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-6 pb-5">
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-base text-gray-600 dark:text-gray-300"
                            >
                              {faq.answer}
                            </motion.div>
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
