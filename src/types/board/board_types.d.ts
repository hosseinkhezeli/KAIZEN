// Board Interfaces
interface IBoard {
  id: string;
  title: string;
  description?: string;
  columns: IBoardColumn[];
  members: IBoardMember[]; // Array of member IDs or usernames
  memberCount: number;
  createdAt: Date;
  updatedAt: Date;
  background?: string; // URL or identifier for the board's background
  permissions?: string; // Board permissions (e.g., private, public)
  labels?: string[]; // Custom labels for categorization
  stickers?: string[]; // Stickers used on cards
  activity?: IBoardActivityLog[]; // Log of activities on the board
}

interface IBoardColumn {
  id: string;
  title: string;
  taskCards: ICard[];
  position: number; // Position of the column on the board
}

interface IBoardActivityLog {
  id: string;
  action: string; // Description of the action taken
  timestamp: Date;
  actor: string; // User who performed the action
}

interface IBoardMember {
  id: string;
  fullName?: string; // User's full name
  profilePictureUrl?: string; // URL for the user's profile picture
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Card Interfaces
interface ICard {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  dueDate?: Date;
  labels?: string[];
  checklist?: ICardChecklistItem[];
  attachments?: ICardAttachment[];
  comments?: ICardComment[];
  status?: ICardStatus; // Represents the current status in JIRA context
  priority?: string; // Priority level in JIRA context
  assignedTo?: ICardAssignee[]; // Users assigned to the card
  coverImage?: string; // URL for card cover image
  tags?: ICardTags[];
  parentId?: string; // ID of the parent task if this is a sub-task
}

interface ICardChecklistItem {
  id: string;
  title: string;
  isChecked: boolean;
}

interface ICardComment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
}

interface ICardAttachment {
  id: string;
  title?: string;
  description?: string;
  type: 'file' | 'link';
}

interface ICardTags {
  id: string;
  title?: string;
  color?: string;
}

interface ICardAssignee {
  memberId: string;
  member: {
    profilePictureUrl: string;
    fullName: string;
    userId: string;
  };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Status Types
type TCardStatusType =
  | 'backlog'
  | 'todo'
  | 'in-progress'
  | 'complete'
  | 'over-due';

interface ICardStatus {
  id: string;
  type: TCardStatusType;
  label: string;
}
