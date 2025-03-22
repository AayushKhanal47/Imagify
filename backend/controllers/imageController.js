export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = res.body;
    const user = await userModel.findById(userId);
    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
