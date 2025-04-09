'use client';

import { motion } from 'framer-motion';
import {
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    name: 'Ticket Discord',
    description: 'Rejoignez notre serveur Discord pour une assistance rapide.',
    icon: ChatBubbleLeftRightIcon,
    buttonText: 'Rejoindre le serveur',
    href: 'https://discord.gg/b4dgg75MmG',
    primary: false,
  },
  {
    name: 'Wiki & Documentation',
    description: 'Découvrez notre documentation complète et nos guides pour vos services.',
    icon: DocumentTextIcon,
    buttonText: 'Découvrir',
    href: '#',
    primary: false,
  },
];

export default function Contact() {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl">
              Contacter le support
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Obtenez de l'aide de notre équipe 24h/24 et 7j/7. Choisissez votre option de support préférée ci-dessous.
            </p>
          </motion.div>
        </div>

        {/* Contact methods grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-700/5 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${method.primary ? 'bg-blue-800' : 'bg-blue-500/10 dark:bg-blue-400/10'}`}>
                  <method.icon className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-blue-600 dark:text-purple-500'}`} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  {method.name}
                </h3>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    method.primary
                      ? 'bg-blue-600 text-white hover:bg-blue-600 focus-visible:outline-blue-600'
                      : 'bg-blue-50 text-blue-400 hover:bg-purple-700 dark:bg-purple-500 dark:text-white dark:hover:bg-blue-900/20'
                  }`}
                >
                  {method.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-24 max-w-2xl"
        >
          <div className="flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-700/5">
            <ClockIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Disponibilité</h3>
            <div className="mt-4 text-center space-y-2">
              <p className="text-base text-gray-500 dark:text-gray-400">
                <span className="font-medium">Support Discord</span> 24h/24 et 7j/7 (Les réponses peuvent prendre plus de temps pendant les weekends)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
