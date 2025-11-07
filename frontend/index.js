import {initializeBlock} from '@airtable/blocks/interface/ui';
import './styles/globals.css';
import {App} from './app/App';

initializeBlock({interface: () => <App />});
