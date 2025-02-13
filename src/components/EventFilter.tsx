import { EventFilterProps } from "../types/props"

const EventFilter: React.FC<EventFilterProps> = ({
    setSelectedType,
    selectedType
}) => {
    return (
        <>
        <div className="mt-4 flex flex-wrap gap-4">
              <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded ${selectedType === 'all' ? 'bg-[#CC7C83] text-black' : 'bg-gray-900 text-[#CC7C83] border border-[#CC7C83]/20'}`}
              >
              All
              </button>
              <button
              onClick={() => setSelectedType('workshop')}
              className={`px-4 py-2 rounded ${selectedType === 'workshop' ? 'bg-[#CC7C83] text-black' : 'bg-gray-900 text-[#CC7C83] border border-[#CC7C83]/20'}`}
              >
              Workshops
              </button>
              <button
              onClick={() => setSelectedType('activity')}
              className={`px-4 py-2 rounded ${selectedType === 'activity' ? 'bg-[#CC7C83] text-black' : 'bg-gray-900 text-[#CC7C83] border border-[#CC7C83]/20'}`}
              >
              Activities
              </button>
              <button
              onClick={() => setSelectedType('tech_talk')}
              className={`px-4 py-2 rounded ${selectedType === 'tech_talk' ? 'bg-[#CC7C83] text-black' : 'bg-gray-900 text-[#CC7C83] border border-[#CC7C83]/20'}`}
              >
              Tech Talks
              </button>
            </div>
        </>
    )
}

export default EventFilter;