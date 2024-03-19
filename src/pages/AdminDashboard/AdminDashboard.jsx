import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Layout from '../../components/Layout/Layout';
import './AdminDashboard.scss';
import eventList from '../EventsPage/EventList';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';
import downloadCSV from './Utilities';
import useModal from '../../hooks/useModal';
import RegisterAdmin from '../../components/RegisterAdmin/RegisterAdmin';

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
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUserData, setShowUserData] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggle, visible] = useModal();

  const queryClient = useQueryClient();

  const eventSelected = useRef(null);

  const { status: userDataStatus, data: userData } = useQuery({
    queryKey: ['usersDataKey'],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}/admin/users`, {
        withCredentials: true,
      });

      return res?.data?.data || [];
    },
  });

  const { status: eventDataStatus, data: eventData } = useQuery({
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
    if (eventDataStatus === 'loading' || userDataStatus === 'loading') {
      setIsLoading(true);
    }

    if (showUserData && userDataStatus === 'success') {
      setTableData(userData);
      setIsLoading(false);
    } else if (eventDataStatus === 'success') {
      setIsLoading(false);
      setTableData(eventData.participants);
    }
  }, [userData, eventData, userDataStatus, eventDataStatus, showUserData]);

  const deleteMutationFn = async ({ url, reqBody }) => {
    const res = await axios.delete(url, {
      data: reqBody,

      withCredentials: true,
    });

    return res.data;
  };

  const deleteMutation = useMutation({
    mutationFn: deleteMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [eventSelected.current.value],
      });
      queryClient.invalidateQueries({ queryKey: ['usersDataKey'] });
    },
  });

  const handleSelectedRows = (state) => {
    const emails = state.selectedRows.map((row) => row.email);
    setSelectedRows(emails);
  };

  const deleteUsers = async () => {
    if (selectedRows.length === 0) {
      toast.error('Select a row to delete', toastStyle);
      return;
    }

    const reqBody = {
      emails: selectedRows,
    };

    const url = `${BASE_URL}/admin/users`;

    await deleteMutation.mutateAsync({ url, reqBody });
  };

  const deleteEventRegistrations = async () => {
    if (selectedRows.length === 0) {
      toast.error('Select a row to delete', toastStyle);
      return;
    }

    const reqBody = {
      emails: selectedRows,
      eventName: eventSelected.current.value,
    };

    const event = eventList.find((e) => e.name === eventSelected.current.value);

    if (event.teamSize) {
      reqBody.teamNames = eventData.participants.map((row) => {
        if (selectedRows.includes(row.email)) return row.teamName;
        return null;
      });
    }

    reqBody.teamNames = reqBody.teamNames?.filter(
      (teamName) => teamName !== null
    );

    const url = `${BASE_URL}/admin/eventRegistration`;

    await deleteMutation.mutateAsync({ url, reqBody });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');

    if (!confirmDelete) {
      return;
    }

    if (showUserData) {
      deleteUsers();
    } else {
      deleteEventRegistrations();
    }
  };

  const eventsName = eventList.map((event) => event.name);

  const handleEventChange = () => {
    setSelectedRows([]);
    if (eventSelected.current.value === 'userRegistered') {
      setShowUserData(true);
      // refetchUsers();
      return;
    }
    setShowUserData(false);
    // refetchEvents();
  };

  const handleEventRegistration = () => {
    if (showUserData) {
      toast.error('Select an event to register', toastStyle);
      return;
    }
    toggle();
  };

  const exportData = useMemo(
    () => (
      <Button onClick={() => downloadCSV(tableData)} designType="secondary">
        <span>Export</span>
        <i />
      </Button>
    ),
    [tableData]
  );

  return (
    <Layout>
      <div className="tableWrapper">
        <header className="tableHeader flex flex-row justify-between items-center mb-5 gap-6 md:gap-0">
          <Button designType="secondary" onClick={handleEventRegistration}>
            <span>Register</span>
            <i />
          </Button>

          {exportData}
        </header>
        <section className="tableContainer mb-10">
          <DataTable
            columns={showUserData ? userColumns : eventColumns}
            data={tableData}
            progressPending={isLoading}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
            selectableRows
            onSelectedRowsChange={handleSelectedRows}
            customStyles={customStyles}
          />

          <div className="flex flex-row justify-between items-center mt-5 gap-6 md:gap-0">
            <select
              className="px-2 md:px-5 py-2 md:py-3"
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
            <Button
              designType="secondary button__delete"
              onClick={handleDelete}
              isSubmitting={deleteMutation.isPending}
            >
              <span>Delete</span>
              <i />
            </Button>
          </div>

          <p className="text-white mt-10 italic">
            <span className=" text-red-500">Note:</span> If you delete a User
            Entry in team event, whole team will be deleted. Please be very
            careful while using delete button, you can&apos;t undo.
          </p>
        </section>
        <RegisterAdmin
          toggle={toggle}
          visible={visible}
          eventName={eventSelected?.current?.value}
          teamSize={
            eventList.find((e) => e.name === eventSelected?.current?.value)
              ?.teamSize || [1]
          }
        />
      </div>
    </Layout>
  );
}

export default AdminDashboard;
