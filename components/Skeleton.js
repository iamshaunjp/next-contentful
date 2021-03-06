export default function Skeleton() {
  return (
    <div className="skeleton">
      <div className="s-banner"></div>
      <div className="s-header"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>
      <div className="s-content"></div>

      <style jsx>{`
        .skeleton {
          max-width: 1200px;
          margin: 20px auto;
        }
        .skeleton > div {
          background: #ddd;
          border-radius: 10px;
          width: 100%;
        }
        .s-banner {
          padding: 10% 0;
        }
        .s-header {
          padding: 10px 0;
        }
        .s-content {
          padding: 5px 0;
        }
      `}</style>
    </div>
  )
}
