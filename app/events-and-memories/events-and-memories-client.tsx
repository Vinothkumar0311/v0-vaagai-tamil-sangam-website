"use client"

import * as React from "react"
import Image from "next/image"
import { getAssetPath } from "@/lib/paths"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Camera, 
  ArrowRight,
  LayoutGrid,
  Loader2
} from "lucide-react"

// Complete list of 115 verified, high-resolution public Google Drive photo IDs
const googleDrivePhotos = {
  "3rd-annual": [
    "1OkAevCclcs9308bl2iPNN1qFRCnZU2EH",
    "1zdhVoaUbgrhRMm5SvY3n-xQ2jB-3Ecy_",
    "1dcUmqJaEskT82Tea5z2teNzivak--FFg",
    "1pry5n0tr_vLUt2HZ7yzugBKNldnRvQh6",
    "1xagc4kT2sL7N8pA6rT_jsWbZAyTHd495",
    "1jjTHAf6_EnS15tDr3z2jAbp-PZ1dAN-N",
    "1RRDdZsncfvtocyeGJOS2x-lIaWfjCD_F",
    "1ki9Tnmf6ABmJ31RQdjUr73uqi-RT077y",
    "1bEuQSGqG-FTnaW9FzngcolWpvQmewhPw",
    "1p4oQCZmpq5Jw_27tXH3OlDb-XoBReAeT",
    "1IA63L6zuKubcjVQOZCyli2lsqYudHNJk",
    "1Hnho-Y77agN7hXzPao6hd6naZ28cZCrI",
    "1-4gXM3geBR7SCeMz0c7dtPNum8W4yYtC",
    "1oFR7csOs1Ei9HxU_s2Bf7Giojy9bxR5_",
    "1-GTRHxRc9rVdv_yYlAmDszMi5yHqej3D",
    "1eB8cM4kKD4E7wefy4wDjumpBlXRmCT2t",
    "1Czz_fRM4xV8tJ6DJh3lB2lma2vLntfuG",
    "1g9lu54TyvPwtSHVbl1CQJH_hE_ouQQ2U",
    "1fEhJv3YXWm956G2wzVMOLflf-y_OQwDI",
    "1XTiuHlXVIV_FuZl7ywITWv7eIwS-rDcg",
    "1-aG03cz1IKFuY0kLvBH8v1H6Wb8A1G9-",
    "1K05y2nyWnRDnIn5cjSO3yC5lHNKI4Rzu",
    "1Q3NmypeTm2PL6oU7BNFCfXliHxiZILFl",
    "1IsrnKyDGFuz4GJTr2USkftMVq-VW8r3T",
    "1phJuuF3r_7NOZORcMErbTbTH_PcD7M9m",
    "1at1M6-iUOsL4z8bwDWf8OP1pJRvqm6iu",
    "1RtbfWqlHK2wMuZ_ty3QVEPklhV9qC8Gc",
    "1GQONmQUiTfAxUZiXR4AocqM_5Pon5Mna",
    "1t_5vqKELCEqBqsnrPsikq35RqxE6ch35",
    "1E_Z0rLAoaOb58TJC9vA0jXmOES9ULPAd",
    "1bbxzjDSNFLOAfUB2TDd1FkxtnPTDGvAI",
    "1FeEWx0BQdu4amsPWbWz39snU9BQjqHZg",
    "1Wn8A_CDdulPEyxdKqjpImwJBR_qeqOZF",
    "17u_Ae4sl8oY5rChOAxzOs1E8mtQp2zVc",
    "18zcfw9l8dQH8DtRk0gLwBJ8DaY6G7hfZ",
    "1O7nReSt2qJO2hYYcsjQXTsf82INrJG_K",
    "1aSA7iDwREoF3wYtDmt-wqdV24TjrlD6F",
    "1Tj3XFEN6aMSLoX5S2wp5RVMqmr52esqq",
    "1DAo-pHtFjJ73QxJgjujSTr5Uksei4Eal",
    "16Z-qWVQO2SU9seEyWhyppOq4Bw2tkLh7",
    "1ztCJ5vdgDSKYuW2LVx6HOGvGN2HfeMWz",
    "1o96WNgdY4uLQHNeXUnIcu5JP4CQ_StD_",
    "1loxnbD2YmLjHVzNwaYJJTpdc9aZAk6WX",
    "1KIJjO6hKpxpNutjkpybqz37BAcKKrdaP",
    "1LuVCKORKDmF6HJxAuurOnTrnX07kU3Jv",
    "12AHI9KtmSBdsvhrJjXq-p1kL8mcCQEAv",
    "1qPuLqqzr-ToU91pGHYAP-uLmkJPxiLsr",
    "1lJ9Sez4vDQhBDjLGfZMrYmoO3bQw0cnh",
    "1vq0UyezuxtLVPSbIWhGsGhIpFG4dUjut",
    "13zZWvuKIe4KQzKt_PpuNm-j9HUB5xQV3"
  ],
  "2025-annual": [
    "13IuoB7pFi0ySCxiqsu7Uxild_aOMpyTn",
    "1273Llw6Gt6W_wjZg8HCFdq5-2aPp4lIS",
    "1iQIYWvQgKaKbcdGJcRg15tOzTgfDVkPq",
    "1o3Q66ZEZnADDuG0igqn9B0TS7a7IDllF",
    "1ZK4CI1iEN469jKndfeYnvTScnarS5oWW",
    "1aHyHVqGLEb0Aq9K3nbs2iipzWcwlzfZ3",
    "11vsnW4AQhMedR68uPk085ys75A8zDlig",
    "1jLT04rbRvuNsVtm3dxEulC2QH7mQ0bNz",
    "1yJAr6OqX2_NA7Gkp5nR0qGGfkC6fPONN",
    "1E3w3UIqDLhP5wabQBQNC-M0BN4kWa8j4",
    "1F5TSshqhGO0oHtVzZ2Uq-GQbLGY8wYLx",
    "1dMy_AnHm-TDA8LZbE53F10TjdDZHcFCq",
    "1cTcCc-kSBPt6QPZS0D08lYPXWk5GJFZy",
    "1VigJW6mRrGN8ZhzhM5u-uEWLZswi8L64",
    "1lPpPc1T34BHz8v-BjMBfRtkb7Rj5KZXZ",
    "1rSgTymvkEzBDxCi5Ti0mDq7D3sh0Tb-z",
    "1qyglz6s7euQ45OwCckQTczsHuyxyqnv5",
    "1mx3ygdeGTl9f-kfSLx3WPtvQyA9NdOjV",
    "1RyxNiB_x8YmYl4PgbT9KCPW2IrV0EkZ3",
    "1jjmVmDdvfXE4g3V9J2e4u1lrRvNrgdHe",
    "1qle9TKhRt9eTE2fL07xVJKoH_32ccf8C",
    "1eD73JIUUH6X2ZEWZswLzU8_Hm_-o-uzv",
    "1yn4Y3OtATLc1pZwe0RnY9FxczTwsuHpM",
    "1Zz1O42cZ5AuLUiVmovzpAvQQYGCMGUqt",
    "1ZTxYa_VKCSGaHaKBbsULk7iRusCvr7vX",
    "1fHFBn9PfDlD48rjT2Z0CZLc3wqiz0Lts",
    "11ot3VGfY6Kpmr5H1f2_pZYsywFaLygAb",
    "1xrN8DgdXrsNoduIMJEDTA0jUb-3856vE",
    "1zDN7EmhduthTshMojXxBHnISCZ56u9Sx",
    "1tsv-yxYkNGOVcOLwYf7rh_UFiuBSjW3E",
    "1i21FbQE99P66XNHDtOUCeFM9_zd_Rdh_",
    "1byJZgHoYRCLVi0B70NEHG4JOnamtwDeG",
    "1ZF5smyokGEUeMaH7Tob5kHpY0Q8dZ5xS",
    "1LgVUpZpPT8xYHI0krRGhKu78yciEsHi2",
    "1qdVXGZeP5SINbLvW3RrOx2iYRd7_u1IS",
    "1KdXS7ZnSKf6M8VVQ0j9-9zC54m2EjQe-",
    "1H3vwLyLN0HGKybdT-Sc_UM9Om05qMIkX",
    "1hY1I0PCA87vjf6TT4V4SHddVQQ5boGE9",
    "1sFXHLDwKh3ex0YR0JziQJP5pknicdLzj",
    "1eKKUBb5oSoeE5SjUd33oa3K3FkebWdgH",
    "1Qynr_4ENpwKI8kb-dCWzyd-qsmWfOHaA",
    "1Yoj6a099FWj9LBvLFxajYVxIDw1ifu9N",
    "1mIE5H1414ggorEHs1twqahf-UjuSyZGT",
    "1t6W0CUu9c7gaTA0l9LHnvP4Os7mSyw7Z",
    "1L-41JuBcNlk9mvrW1Y3pfn8bQaxFpj6z",
    "1b2CJXBeZAK6ZtcseDOCzHgc_7NaEOymt",
    "1w4ibcgs6mT3N8LjZF1g1xoIuKQLPm0ec",
    "1UtxzeofW7x_mxxsy0eRMgNMtG_cYvJFZ",
    "108ICW14-OyPsvJ9w-sBri11U3hhLvUyA",
    "1w6J9-47NhvHkHv9isnSwx8vnNQd2dWGD"
  ],
  "2024-annual": [
    "1edWgHTD4MwUFd_5xcnc1Gf4AbA55f2V2",
    "1iHxt7e3xD0RhK8eTGZ2AFsKJaY2ZJkEN",
    "1GTOAroBDrcc7-OYxsOxsLQh7C2LFIiea",
    "1tVQ7x7l0MlMaeKK1g4t3VDZp_CAh-6uL",
    "1hGIdirhOkSByNJrRprv5Zz1m68fmzdNm",
    "1-KtyXV7CncX_420OqXlRW3BRa31iCmW5",
    "1V5EkvrB1rmtDXlatrvQnX-Xmp7_TpUh-",
    "1e_Ta5MUc9z65YJXMBvUR2DklNL9k5Yu1",
    "1DLijRKh38f8cu8LU-DS1f6_nL37pIvpm",
    "1hZgmzZ5T_obLN7xs1x78RDuFuA_DnReY",
    "1UwAqEXu0AeL5OY0CdKXqRQnaOcuQYRmy",
    "1XHnrq3Kjx2WlmhP9pOJnNx2TPAmzEPAf",
    "1iSGYbb44tp4Rp_WDOB37_OV1z3m0XyOP",
    "1F8bRICBqUpP9rHcoANaotcG_hTssmRzP",
    "1BgsaaBg5VQ74jMRlhWNS-g24GBSWUNsd"
  ]
}

const foldersMetadata = {
  "3rd-annual": {
    title: "3-ஆம் ஆண்டு விழா",
    titleEn: "3rd Annual Day Celebration",
    date: "2025/2026",
    desc: "குத்துவிளக்கு ஏற்றல், முக்கிய பிரமுகர்கள் வரவேற்பு, பகுதி ஒருங்கிணைப்பாளர்கள் கௌரவிப்பு மற்றும் மாணாக்கர்களின் கலை நிகழ்ச்சிகள்.",
    driveUrl: "https://drive.google.com/drive/folders/1DraRzYhLoBzqjmg5xtCSAFN7qqQ25uoc?usp=sharing"
  },
  "2025-annual": {
    title: "2025 பட்டமளிப்பு & ஆண்டு விழா",
    titleEn: "2025 Graduation & Annual Exhibition",
    date: "2025",
    desc: "மாணாக்கர்களுக்குப் பட்டங்கள் மற்றும் பதக்கங்கள் வழங்குதல், களிமண் சிற்பங்கள், வரைபடங்கள் மற்றும் அறிவியல் படைப்புகளின் பிரம்மாண்டக் கண்காட்சி.",
    driveUrl: "https://drive.google.com/drive/folders/17FXwJJDrXIHaCzx9-NHqakZ3Tl8Vf8BU?usp=sharing"
  },
  "2024-annual": {
    title: "2024 ஆண்டு விழா",
    titleEn: "2024 Annual Festival",
    date: "2024",
    desc: "மாணவிகளின் பரதநாட்டிய நடன நிகழ்ச்சிகள், சாதனைத் தமிழ் மலர் வெளியீடு மற்றும் கல்வியாளர்கள் பாராட்டு நிகழ்வுகள்.",
    driveUrl: "https://drive.google.com/drive/folders/1oADluvfB101BHcqxcKbOMfcPmYd7ca15?usp=sharing"
  }
}

interface PhotoItem {
  fileId: string
  category: "3rd-annual" | "2025-annual" | "2024-annual"
  index: number
}

export function EventsAndMemoriesClient() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("3rd-annual")
  const [visibleCount, setVisibleCount] = React.useState<number>(8)
  const [imageLoadedStates, setImageLoadedStates] = React.useState<Record<string, boolean>>({})

  // Construct a unified list of photos based on the selected category
  const activePhotos = React.useMemo(() => {
    const photos: PhotoItem[] = []
    if (selectedCategory === "all") {
      const categories: ("3rd-annual" | "2025-annual" | "2024-annual")[] = ["3rd-annual", "2025-annual", "2024-annual"]
      categories.forEach(cat => {
        googleDrivePhotos[cat].forEach((fileId, index) => {
          photos.push({ fileId, category: cat, index })
        })
      })
    } else {
      const cat = selectedCategory as "3rd-annual" | "2025-annual" | "2024-annual"
      googleDrivePhotos[cat].forEach((fileId, index) => {
        photos.push({ fileId, category: cat, index })
      })
    }
    return photos
  }, [selectedCategory])

  // Memoize image URLs
  const imageUrlCache = React.useMemo(() => {
    return activePhotos.map(photo => ({
      ...photo,
      thumb: `https://lh3.googleusercontent.com/d/${photo.fileId}=w600`,
    }))
  }, [activePhotos])

  // Reset pagination when category changes
  React.useEffect(() => {
    setVisibleCount(8)
    setImageLoadedStates({})
  }, [selectedCategory])

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, activePhotos.length))
  }

  const handleImageLoad = React.useCallback((fileId: string) => {
    setImageLoadedStates(prev => {
      if (prev[fileId]) return prev
      return { ...prev, [fileId]: true }
    })
  }, [])

  const visiblePhotos = activePhotos.slice(0, visibleCount)
  const hasMore = activePhotos.length > visibleCount

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950 pb-24">
      {/* Category Tab Controls */}
      <section className="relative -mt-10 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 dark:border-slate-800 backdrop-blur-md">
          <div className="flex flex-col items-center gap-6">

            {/* Year Filters */}
            <div className="flex flex-wrap gap-3 justify-center w-full">
              {[
                { id: "3rd-annual", label: "2026", count: googleDrivePhotos["3rd-annual"].length },
                { id: "2025-annual", label: "2025", count: googleDrivePhotos["2025-annual"].length },
                { id: "2024-annual", label: "2024", count: googleDrivePhotos["2024-annual"].length },
                // { id: "all", label: "அனைத்து நினைவுகளும்", count: googleDrivePhotos["3rd-annual"].length + googleDrivePhotos["2025-annual"].length + googleDrivePhotos["2024-annual"].length }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-6 py-4 rounded-2xl text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-3 border ${
                    selectedCategory === tab.id
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-[1.03]"
                      : "bg-slate-50 border-slate-200/60 dark:bg-slate-800 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                    selectedCategory === tab.id 
                      ? "bg-white/20 text-white" 
                      : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Category Metadata Card */}
            {/* {selectedCategory !== "all" && (
              <div className="w-full mt-4 p-5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <h3 className="text-xl font-bold text-primary dark:text-gold-light">
                      {foldersMetadata[selectedCategory as keyof typeof foldersMetadata].title}
                    </h3>
                    <span className="px-3 py-0.5 bg-primary/10 text-primary dark:bg-gold/10 dark:text-gold-light text-xs font-bold rounded-full border border-primary/10">
                      ஆண்டு: {foldersMetadata[selectedCategory as keyof typeof foldersMetadata].date}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {foldersMetadata[selectedCategory as keyof typeof foldersMetadata].titleEn}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-3xl">
                    {foldersMetadata[selectedCategory as keyof typeof foldersMetadata].desc}
                  </p>
                </div>
                <a 
                  href={foldersMetadata[selectedCategory as keyof typeof foldersMetadata].driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-primary/5 text-primary hover:bg-primary hover:text-white dark:bg-gold/5 dark:text-gold-light dark:hover:bg-gold dark:hover:text-primary transition-all duration-300 font-bold rounded-xl text-xs border border-primary/10 dark:border-gold/10"
                >
                  <FolderOpen className="w-4 h-4" />
                  கூகுள் டிரைவில் காண்க
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )} */}

          </div>
        </div>
      </section>

      {/* Grid view of photos */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
            <LayoutGrid className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-bold">புகைப்படத் தொகுப்பு</h2>
          </div>
          <span className="text-sm font-semibold text-slate-500">
            {activePhotos.length} புகைப்படங்களில் {Math.min(visibleCount, activePhotos.length)} காட்டப்படுகிறது
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visiblePhotos.map((photo, index) => {
            const isLoaded = imageLoadedStates[photo.fileId]
            const cachedPhoto = imageUrlCache.find(p => p.fileId === photo.fileId)
            const thumbUrl = cachedPhoto?.thumb ?? `https://lh3.googleusercontent.com/d/${photo.fileId}=w600`
            const isAboveFold = index < 4
            
            return (
              <Card 
                key={photo.fileId}
                className="overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl group aspect-square relative"
              >
                <CardContent className="p-0 w-full h-full relative">
                  
                  {/* Photo Loader skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Loader2 className="w-6 h-6 text-primary/40 animate-spin" />
                    </div>
                  )}

                  {/* Google Drive Image — standard native img with no-referrer policy to bypass Google CDN referer block */}
                  <img
                    src={thumbUrl}
                    alt={`Photo ${photo.index + 1} of ${foldersMetadata[photo.category as keyof typeof foldersMetadata]?.title || ''}`}
                    loading={isAboveFold ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                      isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    onLoad={() => handleImageLoad(photo.fileId)}
                    ref={(el) => {
                      if (el && el.complete) {
                        handleImageLoad(photo.fileId);
                      }
                    }}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-white/20 text-white backdrop-blur-md scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/20">
                      <Sparkles className="w-5 h-5 fill-white" />
                    </span>
                  </div>

                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12 animate-in fade-in duration-500">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white hover:bg-gold-light hover:text-primary dark:bg-gold-dark dark:hover:bg-gold dark:text-white transition-all duration-300 font-bold rounded-2xl text-sm md:text-base shadow-lg shadow-primary/10 hover:shadow-primary/20 scale-100 hover:scale-[1.02]"
            >
              மேலும் புகைப்படங்களை ஏற்றுக (Load More)
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

    </div>
  )
}
