export interface Event {
    id: string;
    name: string;
    start_time: number;
    end_time: number;
    event_type: string;
    description?: string;
    speakers: { name: string }[];
    related_events: string[];
    public_url?: string;
    private_url?: string;
    permission?: string;
  }
  
export interface Auth {
    isAuthenticated: boolean;
    username: string | null;
}

export interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
}