import { Client } from './models/Client';
import { Message } from './models/Message';
import { Room } from './models/Room';

const room = new Room();
const client = new Client();

room.add(client);

room.addMessage(new Message(new Date(), 'Sam', 'hello world'));
room.addMessage(new Message(new Date(), 'Sarah', 'hey there'));

room.remove(client);

room.addMessage(new Message(new Date(), 'Sam', 'dont receive this message'));
