import { Request, Response } from "express";
import UpdateAvatarProfile from "../services/Profile/UpdateAvatarProfile";

class ProfileAvatarController {
  public async update(req: Request, res: Response) {
    const updateAvatar = new UpdateAvatarProfile();

    if (!req.file?.filename) return res.status(500);

    const profile = updateAvatar.execute({
      name: "Alan",
      avatarFileName: req.file?.filename
    });
    return res.json(profile);
  }
}

export default ProfileAvatarController;