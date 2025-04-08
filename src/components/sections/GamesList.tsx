'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ServerStackIcon, AdjustmentsVerticalIcon, CpuChipIcon, ChevronDownIcon, ChevronRightIcon, StarIcon, CheckIcon } from '@heroicons/react/24/outline';

const categories = [
  'Tous les jeux'
];

const games = [
  {
    id: 1,
    name: 'VPS Cloud',
    description: 'Serveurs privés virtuel pour tout type de projet',
    category: 'Cloud',
    image: 'https://cdn.discordapp.com/attachments/1234817838355583018/1359260959746691322/d1d9006f-1407-4c4b-af53-aa0b718b0c39.jpg?ex=67f6d5ea&is=67f5846a&hm=7866c17be466c41afa8fd02497e345311423604c74c6c0af9660b9a53bb905b3&',
    monthlyPrice: 5.99,
    cpu: '2 vCPU Ryzen 9 3900x',
    ram: '4 Go RAM',
    disk: '40 Go',
    rating: 4.8,
    uptime: 99.98,
    features: ['Accès complet root', 'Sauvegardes journalières', 'Support 24/7']
  },
  {
    id: 2,
    name: 'Serveurs de jeux',
    description: 'Choississez parmi une large gamme de jeux',
    category: 'Game',
    image: 'https://store-images.s-microsoft.com/image/apps.60323.13950084616086229.56d90257-df96-4000-bf85-a64704b3b019.d4ae0460-e24a-41ce-9e09-a92dc478362f?mode=scale&q=90&h=720&w=1280&format=jpg',
    cpu: '2 vCPU Ryzen 9 3900x',
    ram: '4 Go RAM',
    disk: '40 Go',
    monthlyPrice: 2.99,
    rating: 4.9,
    uptime: 99.98,
    features: ['Panel Game', 'Sauvegardes journalières', 'Support 24/7']
  },
  {
    id: 3,
    name: 'Services Web',
    description: 'Hébergement de sites web et applications',
    category: 'Web',
    image: 'https://cdn.discordapp.com/attachments/1234817838355583018/1359261799597474025/a7911b4f-6bb5-45fc-adc2-4457fdfac804.jpg?ex=67f6d6b2&is=67f58532&hm=988df4a8b919e7c387867294f543605aab4d7a9014eb73a3115ac838364f9781&',
    monthlyPrice: 8.99,
    rating: 4.7,
    uptime: 99.98,
    features: ['Panel de gestion', 'Sauvegardes journalières', 'Support 24/7']
  }
];

const GameCard = ({ game }: { game: typeof games[number] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-200 dark:ring-gray-800"
  >
    <div className="relative z-10">
      <div className="relative aspect-[21/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={game.image}
          alt={game.name}
          width={840}
          height={360}
          className="object-cover w-full h-full"
          unoptimized
        />
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {/* <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200/20 dark:ring-white/20">
            {game.category}
          </span> */}
          <span className="inline-flex items-center rounded-full bg-blue-500/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
            {game.monthlyPrice}€/mo
          </span>
        </div>
      </div>

      <div className="relative p-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {game.name}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(game.rating) 
                          ? 'text-yellow-400' 
                          : i < game.rating 
                            ? 'text-yellow-400/50' 
                            : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {game.rating}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">{game.uptime}%</span>
              <span className="text-xs text-gray-500">Disponibilité</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {game.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {game.features.map((feature, index) => (
              <span key={index} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">
                {feature}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-2">
              <p className="font-medium text-gray-700 dark:text-gray-300">Features</p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <CheckIcon className="h-3.5 w-3.5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-gray-700 dark:text-gray-300">A partir de :</p>
              <div className="space-y-1 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <CpuChipIcon className="h-3.5 w-3.5 text-blue-500" />
                  {game.cpu}
                </div>
                <div className="flex items-center gap-1.5">
                  <AdjustmentsVerticalIcon className="h-3.5 w-3.5 text-blue-500" />
                  {game.ram}
                </div>
                <div className="flex items-center gap-1.5">
                  <ServerStackIcon className="h-3.5 w-3.5 text-blue-500" />
                  {game.disk}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200/10 dark:border-gray-700/50 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">A partir de :</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{game.monthlyPrice}€<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
          </div>
          
          <button className="inline-flex items-center rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors duration-200">
          En savoir plus
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function GamesList() {
  const [searchTerm] = useState('');
  const [selectedCategory ] = useState('All Games');
  const [showAllGames, setShowAllGames] = useState(false);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedGames = showAllGames ? filteredGames : filteredGames.slice(0, 6);

  return (
    <section className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl"
          >
            Nos Offres
          </motion.h2>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
            >
            Choisissez un service d'hébergement adapté à vos besoins et à votre budget.
            </motion.p>
        </div>

        <div className="mt-10">
          {/* <div className="flex flex-wrap items-center justify-center gap-4 pb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div> */}

          {/* <input
            type="text"
            placeholder="Rechercher des jeux..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500"
          /> */}

          <AnimatePresence mode="wait">
            <motion.div 
              layout
              className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredGames.length > 6 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllGames(!showAllGames)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
              >
                {showAllGames ? 'Show Less' : 'Show All Games'}
                <ChevronDownIcon 
                  className={`h-5 w-5 transition-transform duration-200 ${showAllGames ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
