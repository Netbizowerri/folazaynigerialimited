import { Timestamp } from 'firebase/firestore';

export const formatDate = (date: Date | Timestamp | string | null | undefined): string => {
  if (!date) return 'N/A';
  
  let d: Date;
  if (date instanceof Timestamp) {
    d = date.toDate();
  } else if (typeof date === 'string') {
    d = new Date(date);
  } else {
    d = date;
  }
  
  try {
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d);
  } catch (e) {
    console.error('Error formatting date:', e);
    return 'Invalid Date';
  }
};

export const formatDateTime = (date: Date | Timestamp | string | null | undefined): string => {
  if (!date) return 'N/A';
  
  let d: Date;
  if (date instanceof Timestamp) {
    d = date.toDate();
  } else if (typeof date === 'string') {
    d = new Date(date);
  } else {
    d = date;
  }
  
  try {
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(d);
  } catch (e) {
    console.error('Error formatting datetime:', e);
    return 'Invalid Date';
  }
};
