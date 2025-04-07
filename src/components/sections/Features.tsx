'use client';

import { motion } from 'framer-motion';
import {
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuChipIcon,
  ServerIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Performances Foudroyantes',
    description: 'Profitez d’une vitesse inégalée grâce à notre stockage NVMe SSD et nos processeurs AMD EPYC haute performance.',
    icon: BoltIcon,
    stats: [
      { value: '99.9%', label: 'Disponibilité' },
      { value: '<20ms', label: 'Latence' },
      { value: '3.9GHz', label: 'Fréquence CPU' },
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Protection Anti-DDoS',
    description: 'Protection de niveau entreprise contre les attaques DDoS avec atténuation automatique et surveillance en temps réel.',
    icon: ShieldCheckIcon,
    stats: [
      { value: '1Tbps+', label: 'Protection' },
      { value: '100%', label: 'Attaques Bloquées' },
      { value: '24/7', label: 'Surveillance' },
    ],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Mise en Ligne Instantanée',
    description: 'Mettez votre serveur en ligne en quelques secondes grâce à notre système de déploiement automatisé et nos installateurs en un clic.',
    icon: ClockIcon,
    stats: [
      { value: '<30s', label: 'Temps de Mise en Ligne' },
      { value: '1-Clic', label: 'Installation' },
      { value: '24/7', label: 'Support' },
    ],
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Matériel Premium',
    description: 'Matériel de pointe avec des ressources dédiées. Pas de survente, juste des performances pures pour vos jeux.',
    icon: CpuChipIcon,
    stats: [
      { value: '64GB', label: 'RAM DDR4' },
      { value: '12TB', label: 'NVMe' },
      { value: '32', label: 'Cœurs' },
    ],
    gradient: 'from-purple-500 to-primary-400',
  },
  {
    name: 'Réseau Global',
    description: 'Plusieurs emplacements dans le monde garantissent une faible latence pour les joueurs. Choisissez l’emplacement le plus proche de votre communauté.',
    icon: ServerIcon,
    stats: [
      { value: '10', label: 'Emplacements' },
      { value: '40Gbps', label: 'Réseau' },
      { value: '0%', label: 'Perte de Paquets' },
    ],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Tarification Équitable',
    description: 'Tarification transparente sans frais cachés. Payez uniquement pour ce dont vous avez besoin, évoluez avec votre communauté.',
    icon: CurrencyDollarIcon,
    stats: [
      { value: '2,99€', label: 'À partir de' },
      { value: '30 Jours', label: 'Garantie Remboursement' },
      { value: '0', label: 'Frais Cachés' },
    ],
    gradient: 'from-teal-500 to-emerald-600',
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-400 dark:text-primary-300">
              Pourquoi nous choisir ?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              L'expérience FrozenHost
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Découvrez la différence avec notre infrastructure de pointe et nos fonctionnalités premium conçues pour vous.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50 hover:ring-gray-300 dark:hover:ring-gray-600 transition-all duration-300">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-x-3">
                      <div className={`rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5`}>
                        <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>

                    {/* Stats Grid */}
                    <dl className="mt-6 grid grid-cols-3 gap-4">
                      {feature.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {stat.label}
                          </dt>
                          <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
