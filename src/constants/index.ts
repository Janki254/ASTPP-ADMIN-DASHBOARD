import { CallRecord } from '../enum';

export const MENU_OPTIONS = [
    {
        label: 'Profile',
        icon: 'eva:person-fill',
        linkTo: '/user/profile',
    },
    {
        label: 'Switch organization',
        icon: 'eva:sync-outline',
        linkTo: '/organizations',
    },
];

export const callRecords: CallRecord[] = [
    {
        id: 1,
        avatar_url: 'static/avatar-2.jpg',
        name: 'Alice Johnson',
        type: 'Outgoing',
        phone: '312-207-2218',
        duration: '31m 56s',
        lastContacted: '22 Mar, 2024 06:35 AM',
    },
    {
        id: 2,
        name: 'John Doe',
        avatar_url: 'static/avatar-1.jpg',
        type: 'Outgoing',
        phone: '213-653-4255',
        duration: '32m 33s',
        lastContacted: '27 Mar, 2024 06:35 AM',
    },
    {
        id: 3,
        name: 'Jane Smith',
        avatar_url: 'static/avatar-4.jpg',
        type: 'Incoming',
        phone: '415-432-2445',
        duration: '56m 31s',
        lastContacted: '04 Mar, 2024 06:35 AM',
    },
    {
        id: 4,
        name: 'Jane Smith',
        avatar_url: 'static/avatar-4.jpg',
        type: 'Outgoing',
        phone: '312-312-9597',
        duration: '29m 6s',
        lastContacted: '01 Apr, 2024 06:35 AM',
    },
    {
        id: 5,
        name: 'John Doe',
        avatar_url: 'static/avatar-1.jpg',
        type: 'Outgoing',
        phone: '505-257-7035',
        duration: '48m 42s',
        lastContacted: '27 Mar, 2024 06:35 AM',
    },
    {
        id: 6,
        name: 'Alice Johnson',
        avatar_url: 'static/avatar-2.jpg',
        type: 'Incoming',
        phone: '505-746-3981',
        duration: '14m 31s',
        lastContacted: '16 Mar, 2024 06:35 AM',
    },
    {
        id: 7,
        name: 'Bob Brown',
        avatar_url: 'static/avatar-6.jpg',
        type: 'Outgoing',
        phone: '415-925-8004',
        duration: '48m 59s',
        lastContacted: '07 Mar, 2024 06:35 AM',
    },
    {
        id: 8,
        name: 'Bob Brown',
        avatar_url: 'static/avatar-6.jpg',
        type: 'Incoming',
        phone: '505-617-6905',
        duration: '29m 8s',
        lastContacted: '15 Mar, 2024 06:35 AM',
    },
    {
        id: 9,
        name: 'John Doe',
        avatar_url: 'static/avatar-1.jpg',
        type: 'Outgoing',
        phone: '212-378-5953',
        duration: '43m 17s',
        lastContacted: '26 Mar, 2024 06:35 AM',
    },
    {
        id: 10,
        name: 'Alice Johnson',
        avatar_url: 'static/avatar-2.jpg',
        type: 'Outgoing',
        phone: '415-283-9833',
        duration: '32m 26s',
        lastContacted: '18 Mar, 2024 06:35 AM',
    },
];
