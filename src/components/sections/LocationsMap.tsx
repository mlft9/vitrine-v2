'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon, BoltIcon, SignalIcon } from '@heroicons/react/24/outline';

const locations = [
  { 
    id: 1, 
    name: 'Jupiter', 
    region: 'Europe - Allemagne',
    ping: '< 10ms',
    status: '99.99%'
  },
  { 
    id: 2, 
    name: 'Mars', 
    region: 'Europe - France',
    ping: '< 10ms',
    status: '99.99%'
  },
];

export default function LocationsMap() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filteredLocations = locations.filter(location => 
    selectedRegion === 'All Regions' || location.region.includes(selectedRegion)
  );

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Notre réseau</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Nos serveurs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Découvrez notre réseau de serveurs, offrant une latence ultra-rapide et une disponibilité garantie de 99.99%.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-white p-8 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
          >
            <GlobeAltIcon className="mx-auto h-12 w-12 text-primary-600 dark:text-primary-400" />
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">2</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Total de nos serveurs</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl bg-white p-8 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
          >
            <BoltIcon className="mx-auto h-12 w-12 text-primary-600 dark:text-primary-400" />
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">&lt; 20ms</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Moyenne de latence</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl bg-white p-8 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
          >
            <SignalIcon className="mx-auto h-12 w-12 text-primary-600 dark:text-primary-400" />
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">99.99%</h3>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Fonctionnement garanti</p>
          </motion.div>
        </div>

        {/* Location Cards */}
        <motion.div 
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {filteredLocations.map((location) => (
            <motion.div
              layout
              key={location.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{location.name}</h3>
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400">
                  Active
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{location.region}</p>
              
              <dl className="mt-4 grid grid-cols-1 gap-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Latence :</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{location.ping}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Fonctionnement :</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{location.status}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
