import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Layout from '../../components/Layout/Layout';
import './AdminDashboard.scss';
import eventList from '../EventsPage/EventList';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';

// createTheme creates a new theme named solarized that overrides the build in dark theme

const userColumns = [
  {
    name: 'User ID',
    selector: (row) => row.id + 1111,
    style: {
      width: '0px !important',
    },
  },

  {
    name: 'Email',
    selector: (row) => row.email,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
  },

  {
    name: 'College',
    selector: (row) => row.university,
  },
  {
    name: 'Phone No',
    selector: (row) => row.mobile,
  },

  {
    name: 'Roll No',
    selector: (row) => row.rollno,
  },
];

const eventColumns = [
  {
    name: 'User ID',
    selector: (row) => row.id + 1111,
    style: {
      width: '0px !important',
    },
  },

  {
    name: 'Email',
    selector: (row) => row.email,
  },
  {
    name: 'Name',
    selector: (row) => row.name,
  },

  {
    name: 'Team Name',
    selector: (row) => row.teamName || '-',
  },
  {
    name: 'Phone No',
    selector: (row) => row.mobile,
  },
];

const customStyles = {
  header: {
    style: {
      scrollbars: {
        width: 0,
      },
    },
  },

  headRow: {
    style: {
      borderTopStyle: 'solid',
      borderBottomWidth: '2px',
      textTransform: 'uppercase',
      backgroundColor: '#444',
      color: 'white',
    },
  },
  // headCells: {
  // 	style: {
  // 		'&:not(:last-of-type)': {
  // 			borderRightStyle: 'solid',
  // 			borderRightWidth: '1px',
  // 			borderRightColor: defaultThemes.default.divider.default,
  // 		},
  // 	},
  // },
  // cells: {
  // 	style: {
  // 		'&:not(:last-of-type)': {
  // 			borderRightStyle: 'solid',
  // 			borderRightWidth: '1px',
  // 			borderRightColor: defaultThemes.default.divider.default,
  // 		},
  // 	},
  // },

  cells: {
    style: {
      '&:not(:last-of-type)': { width: '250px' },
    },
  },
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

function AdminDashboard() {
  const [eventData, setEventData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUserData, setShowUserData] = useState(true);

  const eventSelected = useRef(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${BASE_URL}/admin/users`, {
          withCredentials: true,
        });

        setUserData(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const { status, data, error, refetch } = useQuery({
    queryKey: [eventSelected?.current?.value],
    queryFn: async () => {
      if (!eventSelected?.current?.value) {
        throw new Error('eventName is required');
      }

      if (!showUserData) {
        const res = await axios.post(
          `${BASE_URL}/admin/eventRegistrations`,
          {
            eventName: eventSelected?.current?.value,
          },
          {
            withCredentials: true,
          }
        );

        return res?.data?.data || [];
      }
      return [];
    },
  });

  useEffect(() => {
    if (status === 'loading') {
      setIsLoading(true);
    }

    if (status === 'error') {
      setIsLoading(false);
      toast.error(error.message, toastStyle);
    }

    if (status === 'success') {
      setIsLoading(false);
      setEventData(data.participants);
    }
  }, [status, data, error]);

  // const handleSelectedRows = (state) => {
  //   console.log(state.selectedRows);
  // };

  const eventsName = eventList.map((event) => event.name);

  const handleEventChange = () => {
    if (eventSelected.current.value === 'userRegistered') {
      setShowUserData(true);
      return;
    }
    setShowUserData(false);
    refetch();
  };

  const handleEventRegistration = () => {
    if (showUserData) {
      toast.error('Kar Dunga Baad me', toastStyle);
    }
  };

  return (
    <Layout>
      <div className="tableWrapper">
        <header className="tableHeader flex flex-col lg:flex-row justify-between items-center mb-5 gap-6 md:gap-0">
          <div className="">
            <select
              className="px-6 py-3"
              onChange={handleEventChange}
              ref={eventSelected}
            >
              <option value="userRegistered">Users Registered</option>
              {eventsName.map((event) => (
                <option key={event} value={event} className="px-6 py-3">
                  {event}
                </option>
              ))}
            </select>
          </div>
          <Button
            designType="secondary"
            onClick={handleEventRegistration}
            // isSubmitting={isSubmitting}
          >
            <span>Register</span>
            <i />
          </Button>
        </header>
        <section className="tableContainer">
          <DataTable
            columns={showUserData ? userColumns : eventColumns}
            data={showUserData ? userData : eventData}
            progressPending={isLoading}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
            // selectableRows
            // onSelectedRowsChange={handleSelectedRows}
            // clearSelectedRows={toggledClearRows}
            customStyles={customStyles}
          />
        </section>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
