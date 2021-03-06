// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {supabase} from '../../utils/supabaseClient'


// Example of how to verify and get user data server-side.
const getData = async (req, res) => {
  const token = req.headers.token;

  const { data: user, error } = await supabase.auth.api.getUser(token);

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(user);
};

export default getUser;