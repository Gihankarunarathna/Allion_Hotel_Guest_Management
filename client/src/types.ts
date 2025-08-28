export interface Guest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  room_number?: string;
  check_in_date?: string;
  check_out_date?: string;
  notes?: string;
  created?: string;
}
