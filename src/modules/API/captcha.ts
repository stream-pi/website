import axios from "axios";

export const validate = async (
  token: string | null | undefined
): Promise<boolean> => {
  if (!token) return false;
  const secret = process.env.CAPTHCA_SECRET;
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      }
    );

    //@ts-ignore
    return response.data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
