import { Search } from 'lucide-react'; 
import { SearchBarProps } from '../types/props';

const SearchBar: React.FC<SearchBarProps> = ({
    searchTerm,
    setSearchTerm
}) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };

    return (
        <div className="relative">
              <input
                type="text"
                placeholder="Search events by name, description, or type..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 bg-gray-900 rounded-lg border border-[#CC7C83]/20 focus:border-[#CC7C83] focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
    );

}

export default SearchBar;