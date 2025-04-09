'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ServerIcon,
  CommandLineIcon,
  CpuChipIcon,
  FolderIcon,
  ShieldCheckIcon,
  UsersIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  CogIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  ClockIcon,
  ArrowDownTrayIcon,
  SignalIcon,
  ArchiveBoxIcon,
  TrashIcon,
  LinkIcon,
  PowerIcon,
  Square3Stack3DIcon,
  ArrowsPointingOutIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Gestion du Serveur',
    description: 'Démarrez, arrêtez et redémarrez votre serveur en un clic. Surveillez l’utilisation des ressources en temps réel.',
    icon: ServerIcon,
  },
  {
    name: 'Accès à la Console',
    description: 'Accès complet à la console avec historique des commandes et auto-complétion. Envoyez des commandes directement à votre serveur.',
    icon: CommandLineIcon,
  },
  {
    name: 'Gestion des Ressources',
    description: 'Surveillez l’utilisation du CPU, de la RAM et du disque. Définissez des limites de ressources et recevez des alertes.',
    icon: CpuChipIcon,
  },
  {
    name: 'Gestionnaire de Fichiers',
    description: 'Parcourez, modifiez, téléchargez et envoyez des fichiers directement via l’interface web.',
    icon: FolderIcon,
  },
  {
    name: 'Gestionnaire de Bases de Données',
    description: 'Créez et gérez des bases de données MySQL/MongoDB. Importez/exportez des données facilement.',
    icon: CircleStackIcon,
  },
  {
    name: 'Gestion des Sous-utilisateurs',
    description: 'Accordez des permissions spécifiques aux membres de l’équipe. Contrôlez les niveaux d’accès et surveillez l’activité.',
    icon: UserGroupIcon,
  },
  {
    name: 'Gestion des Joueurs',
    description: 'Gérez la liste blanche, les bannissements et les permissions des joueurs. Consultez les statistiques et l’historique des joueurs.',
    icon: UsersIcon,
  },
  {
    name: 'Gestionnaire de Versions',
    description: 'Changez facilement de version de jeu. Détection automatique des versions et mises à jour.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Importateur de Serveur',
    description: 'Importez des serveurs existants depuis d’autres fournisseurs d’hébergement ou des machines locales.',
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'Téléchargement depuis URL',
    description: 'Téléchargez des fichiers directement sur votre serveur depuis des URLs externes.',
    icon: LinkIcon,
  },
  {
    name: 'Gestion des Ports',
    description: 'Gestion et redirection automatiques des ports. Allocation de ports personnalisée disponible.',
    icon: SignalIcon,
  },
  {
    name: 'Installateur de JAR',
    description: 'Installation en un clic de JARs de serveur personnalisés et de packs de mods.',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Sauvegarde des Données',
    description: 'Sauvegardes automatiques avec des politiques de rétention personnalisables. Restauration en un clic.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Accès SFTP',
    description: 'Accès sécurisé pour le transfert de fichiers pour une gestion avancée du serveur.',
    icon: ShieldCheckIcon,
  },
];

export default function ControlPanel() {
  type SectionType = 'files' | 'plugins' | 'versions' | 'settings';
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>('files');
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 9);

  // Preview sections content
  const previewSections: Record<SectionType, JSX.Element> = {
    files: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Gestionnaire de fichiers</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">config</span>
            </div>
            <span className="text-xs text-gray-500">Dossier</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">plugins</span>
            </div>
            <span className="text-xs text-gray-500">Dossier</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <CommandLineIcon className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">server.properties</span>
            </div>
            <span className="text-xs text-gray-500">1.2 KB</span>
          </div>
        </div>
      </div>
    ),
    plugins: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Gestion des plugins</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">WorldEdit</span>
            </div>
            <button className="text-xs bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded bg-blue-600">Installer</button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Essentials</span>
            </div>
            <button className="text-xs bg-gray-600 text-white px-2 py-1 rounded">MAJ</button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Vault</span>
            </div>
            <button className="text-xs bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded bg-blue-600">Installer</button>
          </div>
        </div>
      </div>
    ),
    versions: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Versions</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">1.20.1</span>
            </div>
            <span className="text-xs bg-blue-900 text-white px-2 py-1 rounded">Actuelle</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">1.19.4</span>
            </div>
            <button className="text-xs bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded bg-blue-600">Changer</button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">1.18.2</span>
            </div>
            <button className="text-xs bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded bg-blue-600">Changer</button>
          </div>
        </div>
      </div>
    ),
    settings: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Paramètres</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Nom du serveur</span>
            <input type="text" className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1" defaultValue="My Game Server" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Joueurs max</span>
            <input type="number" className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1" defaultValue="20" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Difficulté</span>
            <select className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1">
              <option>Easy</option>
              <option>Normal</option>
              <option>Hard</option>
            </select>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-blue-400 dark:text-blue-600">
            Panel Game
          </h2> */}
            <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl">
            Gestion facile de votre serveur
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Gérez votre serveur de jeu avec notre panel intuitif propulsé par Pterodactyl. Accédez à toutes les fonctionnalités dont vous avez besoin pour gérer votre serveur.
            </p>
        </div>

        <div className="mt-16 relative">
          {/* Panel Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl ring-1 ring-gray-200 dark:ring-gray-700 shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Panel Header */}
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Panel Pterodactyl</span>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Server Stats */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Ressources</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">CPU</span>
                            <span className="text-gray-900 dark:text-white">45%</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">RAM</span>
                            <span className="text-gray-900 dark:text-white">2.5GB / 4GB</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '62%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">SSD</span>
                            <span className="text-gray-900 dark:text-white">15GB / 50GB</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Console Preview */}
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400">[Server] Starting server...</div>
                      <div className="text-gray-400">[Info] Loading world data</div>
                      <div className="text-gray-400">[Info] Server started on port 25565</div>
                      <div className="text-yellow-400">[Warning] Backup scheduled in 5 minutes</div>
                      <div className="flex items-center mt-2">
                        <span className="text-gray-400">$</span>
                        <div className="ml-2 h-4 w-2 bg-white/50 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions and Preview Section */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setActiveSection('files')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 ${
                          activeSection === 'files' 
                            ? 'bg-blue-400 text-white hover:bg-blue-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <FolderIcon className="h-5 w-5" />
                        <span>Fichiers</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('plugins')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 ${
                          activeSection === 'plugins' 
                            ? 'bg-blue-400 text-white hover:bg-blue-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <PuzzlePieceIcon className="h-5 w-5" />
                        <span>Plugins</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('versions')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 ${
                          activeSection === 'versions' 
                            ? 'bg-blue-400 text-white hover:bg-blue-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <ArrowPathIcon className="h-5 w-5" />
                        <span>Versions</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('settings')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 ${
                          activeSection === 'settings' 
                            ? 'bg-blue-400 text-white hover:bg-blue-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <CogIcon className="h-5 w-5" />
                        <span>Paramètres</span>
                      </button>
                    </div>

                    {/* Dynamic Preview Section */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {previewSections[activeSection]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <AnimatePresence>
              <motion.dl 
                layout
                className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
              >
                {displayedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <feature.icon className="h-5 w-5 flex-none text-blue-400 dark:text-blue-300" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </motion.dl>
            </AnimatePresence>

            {/* Show All Features Button */}
            <motion.div 
              layout
              className="mt-16 text-center"
            >
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-purple-500 hover:text-purple-700 dark:text-purple-500 dark:hover:text-purple-700 duration-200"
              >
                {showAllFeatures ? 'Voir moins de fonctionnalités' : 'Voir plus de fonctionnalités'}
                <ChevronDownIcon 
                  className={`h-5 w-5 transition-transform duration-200 ${showAllFeatures ? 'rotate-180' : ''}`}
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
