export default function getListStudentIds(tkhwera) {
    if (!Array.isArray(tkhwera)) {
      return [];
    }
  
    const newtab = tkhwera.map((t1) => t1.id);
  
    return newtab;
  }