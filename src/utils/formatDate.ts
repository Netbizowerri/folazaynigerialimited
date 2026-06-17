type DateLike = Date | string | null | undefined;

const toDate = (date: DateLike): Date => {
  if (!date) return new Date();
  if (typeof date === 'string') return new Date(date);
  return date;
};

export const formatDate = (date: DateLike): string => {
  if (!date) return 'N/A';
  try {
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(toDate(date));
  } catch {
    return 'Invalid Date';
  }
};

export const formatDateTime = (date: DateLike): string => {
  if (!date) return 'N/A';
  try {
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(toDate(date));
  } catch {
    return 'Invalid Date';
  }
};
