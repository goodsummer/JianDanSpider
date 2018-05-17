package jiandan;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Random;
import java.util.concurrent.ArrayBlockingQueue;

public class SavePicThread implements Runnable {
	
	private ArrayBlockingQueue<String> abq;
	
	SavePicThread(ArrayBlockingQueue<String> abq) {
		this.abq = abq;
	}
	
	@Override
	public void run() {
		//创建图片存储文件夹
		synchronized(this) {
			File f = new File(SpiderConstants.IMG_FILE_DIR);
			if(!f.exists()) {
				f.mkdirs();
				System.out.println("图片存储文件夹创建成功");
			} else {
				System.out.println("图片存储文件夹已存在,文件夹名称:" + SpiderConstants.IMG_FILE_DIR);
			}
		}
		
					
		int num = 0;
		File file = null;
		Random random = new Random(27);
		while(true) {
			try {
				String picUrl = abq.take();		
				String picType = picUrl.substring(picUrl.lastIndexOf("."), picUrl.length());
				
				if (!picUrl.startsWith("http")) {
					picUrl = "http:" + picUrl;
				}

				byte[] img= NetUtil.httpGet(picUrl);
				if(img == null) {
					System.out.println("图片" + picUrl + "======================抓取失败");
					continue;
				}
		
				file = new File(SpiderConstants.IMG_FILE_DIR + System.currentTimeMillis() + "_" + random.nextInt(20)  + num + picType);
				FileOutputStream fo = new FileOutputStream(file);
				fo.write(img);
				fo.close();
				
				System.out.println("图片" + picUrl + "==========抓取成功");

				num++;
				Thread.sleep(1000);
			} catch (Exception e) {
				System.out.println("图片写入失败");

				if(file !=null && file.exists()) {
					file.delete();
				}
			}
		}
	}
}
