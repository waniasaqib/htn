import { formatDistance } from 'date-fns';
import { motion } from 'framer-motion';
import { Lock, Globe } from 'lucide-react'; 
import { EventProps } from '../types/props';

const Events: React.FC<EventProps> = ({
    auth,
    isLoading,
    events,
    searchTerm,
    selectedType
}) => {
    const filteredEvents = events
    .filter(event => (!auth.isAuthenticated ? event.permission !== 'private' : true))
    .filter(event => 
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.event_type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(event => selectedType === 'all' || event.event_type === selectedType);

    return (
        <div className="max-w-6xl mx-auto px-8 py-12">
        {isLoading ? (
          <div className="text-center font-lily text-xl">loading events...</div>
        ) : (
          <>
            <div className="mb-4 text-sm">
              Showing {filteredEvents.length} events
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-900 rounded-lg p-6 border border-[#CC7C83]/20 hover:border-[#CC7C83]/50 transition-colors group relative"
                >
                  {/* Privacy Indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {event.permission === 'private' ? (
                      <div className="flex items-center gap-1 text-[#CC7C83]">
                        <Lock size={16} />
                        <span className="text-xs">Private</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-green-400">
                        <Globe size={16} />
                        <span className="text-xs">Public</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-[#CC7C83] transition-colors pr-20">
                    {event.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-[#CC7C83]">
                      {event.event_type.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 mt-2">
                    {formatDistance(event.start_time, event.end_time)} • {
                      new Date(event.start_time).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit'
                      })
                    }
                  </p>
                  {event.description && <p className="text-gray-300 mb-4">{event.description}</p>}
                  {(auth.isAuthenticated ? event.private_url : event.public_url) && (
                    <a
                      href={auth.isAuthenticated ? event.private_url : event.public_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-[#CC7C83] hover:text-[#CC7C83]/80 transition-colors"
                    >
                      View Details →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    )
}

export default Events