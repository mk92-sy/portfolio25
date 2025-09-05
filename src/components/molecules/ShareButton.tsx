import IconButton from '../atoms/IconButton'

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '이승연 | 웹퍼블리셔 포트폴리오',
          text: '안녕하세요. 준비된 웹 퍼블리셔 이승연입니다.',
          url: window.location.href,
        })
        console.log('공유 성공!')
      } catch (err) {
        console.error('공유 실패:', err)
      }
    } else {
      alert('이 브라우저는 공유 기능을 지원하지 않습니다.')
    }
  }

  return (
    <IconButton
      key={`share`}
      icon={`share`}
      title="공유하기"
      onClick={handleShare}
    />
  )
}

export default ShareButton
