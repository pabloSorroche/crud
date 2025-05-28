import { NextFunction, Request, Response } from 'express';

import { UserRole } from 'contexts/auth/domain/UserRole';

export const authorizeRoles =
  (allowedRoles: UserRole[]) => (_: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;

    console.log(user);

    if (!user) {
      res.status(401).json({ error: 'Not authenticated ' });
      return;
    }

    console.log({ user });

    if (!allowedRoles.includes(user.role)) {
      res.status(403).json({ error: 'Access denied' });
      return;
    }

    next();
  };
