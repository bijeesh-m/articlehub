module.exports = async (req, res) => {
  try {
    const isExist = await User;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
