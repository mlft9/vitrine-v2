'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Creator {
  id: string;
  name: string;
  imageUrl: string;
  subscribers: string;
}

const creators: Creator[] = [
  {
    id: '1',
    name: 'Dyland PROS',
    imageUrl: 'https://yt3.googleusercontent.com/jr1_F787itnqUK-LHkS2tt7ODY9jX8gPpU1lkL0bRrpI0PdlmpZLO6rwHBDm172UGDHd6zC2=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '17800000'
  },
  {
    id: '2',
    name: 'Windah Basudara',
    imageUrl: 'https://yt3.googleusercontent.com/8Uv2AxeLJ9px5PdeFTbtgC7c96W2S9r1Oqak4Oi7xjCpn8hWWzvTdxYqPqgOSGvs0__H2ZTGMTM=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '10700000'
  },
  {
    id: '3',
    name: 'Jess No Limit',
    imageUrl: 'https://yt3.googleusercontent.com/uaf-jTyJT6EG4AHM5xTxUtgHrq8hxJS9laMg-c72wgdsj3KJoRK2XjwXkluByEbKEt5hog5y=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '14400000'
  },
  {
    id: '4',
    name: 'NOOB GAMING',
    imageUrl: 'https://yt3.googleusercontent.com/OywT67R5VQNROc0WeZVCZHoeIq_lfDl72E3cULPbXXJqIwrSjx7xKaz_9N_ajszJ0qVWKfGvwwY=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '5800000'
  },
  {
    id: '5',
    name: 'Bang Alex',
    imageUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_l9iw0CBZK6R84ghVSqdMWgVy7PeXWiJ_3IRY31kWnF604=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '4800000'
  },
  {
    id: '6',
    name: 'Oura Gaming',
    imageUrl: 'https://yt3.googleusercontent.com/025YhoA4ntG32HKMZntuw7__sX3IMa5VCUtZmf7hlDGkO4Es9cAwIf7320qLinqBwhoAV8cR3A=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '4200000'
  },
  {
    id: '7',
    name: 'Kemas Gaming',
    imageUrl: 'https://yt3.googleusercontent.com/JnyVhUCfAr3W7mFo-f3COD_SQTaXPOr3yphFPiMf09Yuup0ALzJqCRwBTIaJ7BIWeAGGZ2gw3g=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '2800000'
  },
  {
    id: '8',
    name: 'Zuxxy Gaming',
    imageUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_l3q7rvQuQ91DZB8yUGoY8pOEBmDc1LjhlpUtM9qWMiKA=s160-c-k-c0x00ffffff-no-rj',
    subscribers: '2400000'
  }
];

function formatSubscriberCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return count;
}

export default function Creators() {
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
            Featured Creators
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Top Content Creators
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join the community of successful content creators who trust our hosting services for their gaming servers.
          </p>
        </motion.div>

        <div className="mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {creators.map((creator, index) => (
              <motion.a
                key={creator.id}
                href={`https://youtube.com/channel/${creator.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group block"
              >
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50 hover:ring-gray-300 dark:hover:ring-gray-600 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all duration-300">
                        <Image
                          width={48}
                          height={48}
                          src={creator.imageUrl}
                          alt={creator.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {creator.name}
                      </h3>
                      <div className="flex items-center">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-medium">
                            {formatSubscriberCount(creator.subscribers)}
                          </span>
                          <span className="mx-1 opacity-60">•</span>
                          <span className="opacity-75">subs</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-red-500 transition-colors duration-300">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-purple-500/5 to-red-500/5 opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-xl pointer-events-none" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
