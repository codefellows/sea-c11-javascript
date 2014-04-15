function preferredName(fname, lname) {
  return !!fname == !!lname ? false : fname || lname;
}
