// height, width로 페이지 마다 크기 추가 조정 필요
// left top, right, bottom으로 위치도 추가 조정 필요

const btn = {
  buttonLogin: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 'calc(50% - 100px)',
    top: 'calc(50% - 30px)',
    border: '4px solid #000000',
    borderRadius: '50px',
    fontFamily: 'GyeonggiTitleOTF',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px',
    color: '#000000',
  },
  buttonYb: {
    background: '#FFEB8C',
    borderRadius: '10px',
    fontFamily: 'Godo B',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  buttonBorder: {
    boxSizing: 'border-box',
    background: '#feffe0',
    border: '3px solid #dda900',
    borderRadius: '10px',
    fontFamily: 'Godo B',
    fontStyle: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
  },
  buttonWhite: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 'calc(50% - 200px / 2 + 122px)',
    top: '702px',
    background: '#ffffff',
    border: '1px solid #000000',
    borderRadius: '10px',
    fontFamily: 'Godo B',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '23px',
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    cursor: 'pointer',
    filter: 'box-shadow(4px 4px 4px rgba(0,0,0,0.25))',
  },
  buttonDetail: {
    background: 'rgba(250, 215, 0, 0.7)',
    borderRadius: '10px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    fontFamily: 'Godo B',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonYbShadow: {
    background: '#FFEB8C',
    borderRadius: '10px',
    fontFamily: 'Godo B',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    filter: 'drop-shadow(4px 4px 4px rgba(0,0,0,0.25))',
  },
};

export default btn;
