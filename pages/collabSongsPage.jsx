import { useMediaQuery } from "@mui/material";
import ColabSong from "../src/components/organisms/colabSong.jsx"
import ColabSongResponsive from "../src/components/organisms/colabSongResponsive.jsx"

const ColabSongsPage=()=>{
  const isMedium = useMediaQuery("(min-width:821px)", { noSsr: true });
  return(
    <div>
      {isMedium ? (
        <ColabSong/>
      ) : (
        <ColabSongResponsive/>
      )}

    </div>
  )
}

export default ColabSongsPage;