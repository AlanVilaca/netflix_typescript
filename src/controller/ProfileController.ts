import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import GetProfiles from "../services/Profile/GetProfiles";

class ProfileAvatarController {
  public async showProfiles(req: Request, res: Response) {
    const userId = req.user.id;

    const getProfilesSession = new GetProfiles();
    const profiles = await getProfilesSession.execute(userId);

    return res.json(instanceToInstance(profiles));
  }
}

export default ProfileAvatarController;