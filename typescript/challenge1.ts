import { Request, Response, NextFunction } from 'express';
interface AuthRequest extends Request {
    user?: {
        userId: number,
        role: string
    }

};

function authenticate(req: AuthRequest, res: Response, next: NextFunction): void {
    const token = req.headers.autorization ? split(" ")[1];

    if (!token)
        res.status(401).json({ error: "error" })

    try {

        const decoded = jwt.verify(token, SECRET) as { userId: number, role: string }
        req.user = decoded;
        next()
    }catch{
        res.status(401).json({ error: "error" })
    }
})
