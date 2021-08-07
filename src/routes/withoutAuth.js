import { map, redirect } from 'navi';

export default (matcher) =>
  map((_, context) => {
    const valid = context.currentUser;

    if (!valid) {
      return matcher;
    }

    return redirect('/');
  });
