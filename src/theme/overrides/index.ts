import { merge } from 'lodash';
import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';
import Table from './Table';
import Menu from './Menu';
import List from './List';
import Checkbox from './Checkbox';

export default function ComponentsOverrides(theme: any) {
    return merge(
        Card(theme),
        Lists(theme),
        List(theme),
        Paper(theme),
        Input(theme),
        Button(theme),
        Tooltip(theme),
        Table(theme),
        Backdrop(theme),
        Typography(theme),
        IconButton(theme),
        Autocomplete(theme),
        Menu(theme),
        Checkbox(theme)
    );
}
