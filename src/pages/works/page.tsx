import { useEffect, useState } from 'react'
import data from '../../data/data.json'
import { useNavigate } from 'react-router-dom'

export default function WorksPage() {
  const [listType, setListType] = useState('list')
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  const itemsPerPage = 4
  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    })
  }, [currentPage])

  return (
    <div
      className="inner"
      role="tabpanel"
      id="tabpanel-works"
      data-wrap="Works"
    >
      <div className="view-select">
        <button
          className={`type ${listType === 'list' ? 'active' : ''}`}
          onClick={() => {
            setListType('list')
          }}
          aria-label="리스트 뷰"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect x="2" y="2" width="16" height="3" rx="1" />
            <rect x="2" y="8" width="16" height="3" rx="1" />
            <rect x="2" y="14" width="16" height="3" rx="1" />
          </svg>
        </button>
        <button
          className={`type ${listType === 'grid' ? 'active' : ''}`}
          onClick={() => {
            setListType('grid')
          }}
          aria-label="그리드 뷰"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect x="2" y="2" width="7" height="7" rx="1" />
            <rect x="11" y="2" width="7" height="7" rx="1" />
            <rect x="2" y="11" width="7" height="7" rx="1" />
            <rect x="11" y="11" width="7" height="7" rx="1" />
          </svg>
        </button>
      </div>
      <div className={`list-box ${listType}-view`}>
        {currentData.map((item, index) => (
          <button
            onClick={() => {
              navigate(`/works/${item.id}`)
            }}
            className="card"
            key={index}
          >
            {item.thumbnail !== '' && (
              <div className="thumnail-area">
                <img src={item.thumbnail} alt="" />
              </div>
            )}
            <div className="info-area">
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="pagination mt-4">
          <button
            className="page-btn prev"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="이전 페이지"
          >
            ←
          </button>

          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
                aria-label={`${page}페이지로 이동`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="page-btn next"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="다음 페이지"
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}
